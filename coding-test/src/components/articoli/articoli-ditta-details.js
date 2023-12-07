import { Close } from '@mui/icons-material'
import { Avatar, Button, IconButton, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

function ArticoliDittaDetails({ articolo, handleClose }) {
    return (
        <div>
            <div className='details'>
                <div>
                    <img className="details-img" src={articolo.cdn_url} />
                    <h2 id="child-modal-description" className='details-name'>{articolo.descart}</h2>
                    <p id="child-modal-description" className='details-name'>
                        <b>Codice Articolo: </b> {articolo.codart}
                    </p>
                </div>
                <div>
                    <p id="child-modal-description">
                        <b>Descrizione:</b> <p>{articolo.descrizione_estesa}</p>
                    </p>
                    <p id="child-modal-description">
                        <b>Prezzo:</b> {articolo.prezzoLordo} €
                    </p>
                    <p id="child-modal-description">
                        <b>Data creazione:</b> {articolo.data_creazione.replace("T", " ")}
                    </p>
                    <p id="child-modal-description">
                        <b>Data ultima modifica:</b> {articolo.data_ultima_modifica.replace("T", " ")}
                    </p>
                    <p id="child-modal-description">
                        <b>Identificativo Azienda: </b> {articolo.identificativo_azienda}
                    </p>
                    <p id="child-modal-description">
                        <b>Acquistabile: </b> {!articolo.non_acquistabile ? "Yes" : "No"}
                    </p>
                    <p id="child-modal-description">
                        <b>Prenotabile: </b> {!articolo.non_prenotabile ? "Yes" : "No"}
                    </p>
                    <p id="child-modal-description">
                        <b>Cashback: </b> {articolo.percentuale_cashback} %
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticoliDittaDetails