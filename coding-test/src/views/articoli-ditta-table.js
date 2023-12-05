import { Avatar, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArticoliDitta from '../services/articoli-ditta-service'

function ArticoliDittaTable() {
  const [articoli, setArticoli] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    ArticoliDitta.getArticoli().then((res) => {
      console.log(res.data);
      setArticoli(res.data)
    })
  }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className='table-wrapper'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Descrizione</TableCell>
            <TableCell>Prezzo</TableCell>
            <TableCell>Aliquota</TableCell>
            <TableCell>Cashback &nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(articoli)}
          {articoli.slice
            (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((articolo) => {
              return (
                <TableRow>
                  <TableCell>
                    <Avatar src={articolo.cdn_url} />
                  </TableCell>
                  <TableCell>
                    {articolo.descart}
                  </TableCell>
                  <TableCell>
                    {articolo.prezzoLordo} €
                  </TableCell>
                  <TableCell>
                    {articolo.aliquota}
                  </TableCell>
                  <TableCell>
                    {articolo.percentuale_cashback} %
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={articoli.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default ArticoliDittaTable