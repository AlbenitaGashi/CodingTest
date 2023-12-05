import React, { Component } from 'react'
import axios from 'axios'

class prodottiService {
    async getProdotti() {
        return axios.get(process.env.REACT_APP_DOTNET_APIURL + "/ProdottiApi");
    }
}

const ProdottiService = new prodottiService();
export default ProdottiService;