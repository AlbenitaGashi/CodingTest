using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DotNetApp.Data;
using DotNetApp.Models;

namespace DotNetApp.Controllers
{
    public class ProdottisController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProdottisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Prodottis
        public async Task<IActionResult> Index()
        {
              return _context.Prodotti != null ? 
                          View(await _context.Prodotti.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.Prodotti'  is null.");
        }

        // GET: Prodottis/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Prodotti == null)
            {
                return NotFound();
            }

            var prodotti = await _context.Prodotti
                .FirstOrDefaultAsync(m => m.Id == id);
            if (prodotti == null)
            {
                return NotFound();
            }

            return View(prodotti);
        }

        // GET: Prodottis/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Prodottis/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nome,Descrizione,Costo,Image")] Prodotti prodotti)
        {
            if (ModelState.IsValid)
            {
                _context.Add(prodotti);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(prodotti);
        }

        // GET: Prodottis/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Prodotti == null)
            {
                return NotFound();
            }

            var prodotti = await _context.Prodotti.FindAsync(id);
            if (prodotti == null)
            {
                return NotFound();
            }
            return View(prodotti);
        }

        // POST: Prodottis/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nome,Descrizione,Costo,Image")] Prodotti prodotti)
        {
            if (id != prodotti.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(prodotti);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProdottiExists(prodotti.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(prodotti);
        }

        // GET: Prodottis/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Prodotti == null)
            {
                return NotFound();
            }

            var prodotti = await _context.Prodotti
                .FirstOrDefaultAsync(m => m.Id == id);
            if (prodotti == null)
            {
                return NotFound();
            }

            return View(prodotti);
        }

        // POST: Prodottis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Prodotti == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Prodotti'  is null.");
            }
            var prodotti = await _context.Prodotti.FindAsync(id);
            if (prodotti != null)
            {
                _context.Prodotti.Remove(prodotti);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProdottiExists(int id)
        {
          return (_context.Prodotti?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
