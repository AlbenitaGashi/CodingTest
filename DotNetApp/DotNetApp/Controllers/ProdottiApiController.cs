using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetApp.Data;
using DotNetApp.Models;

namespace DotNetApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottiApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProdottiApiController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProdottiApi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prodotti>>> GetProdotti()
        {
          if (_context.Prodotti == null)
          {
              return NotFound();
          }
            return await _context.Prodotti.ToListAsync();
        }

        // GET: api/ProdottiApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Prodotti>> GetProdotti(int id)
        {
          if (_context.Prodotti == null)
          {
              return NotFound();
          }
            var prodotti = await _context.Prodotti.FindAsync(id);

            if (prodotti == null)
            {
                return NotFound();
            }

            return prodotti;
        }

        // PUT: api/ProdottiApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProdotti(int id, Prodotti prodotti)
        {
            if (id != prodotti.Id)
            {
                return BadRequest();
            }

            _context.Entry(prodotti).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdottiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProdottiApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Prodotti>> PostProdotti(Prodotti prodotti)
        {
          if (_context.Prodotti == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Prodotti'  is null.");
          }
            _context.Prodotti.Add(prodotti);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProdotti", new { id = prodotti.Id }, prodotti);
        }

        // DELETE: api/ProdottiApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProdotti(int id)
        {
            if (_context.Prodotti == null)
            {
                return NotFound();
            }
            var prodotti = await _context.Prodotti.FindAsync(id);
            if (prodotti == null)
            {
                return NotFound();
            }

            _context.Prodotti.Remove(prodotti);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdottiExists(int id)
        {
            return (_context.Prodotti?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
