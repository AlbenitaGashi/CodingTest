import React, { Component } from 'react'
import axios from 'axios'

class articoliDitta {
    async getArticoli() {
        return axios.get(process.env.REACT_APP_APIURL + "/ArticoliDitta", {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZFRva2VuIjoiTG9uZ1Rva2VuIiwiSWRBemllbmRhIjoiUE5OUFBSVUNQRk1OQU5aTkJZSkpJV0xVWFhNWEVKIiwiSWRBbmFnUnRjIjoiMCIsIkNvZENsaWVudGUiOiIwIiwiSWRDYW5hbGUiOiIxIiwiRW1haWwiOiJhYmJpZ2xpYW1lbnRvQG15dGlkeS5pdCIsInJvbGUiOiJBemllbmRhIiwiV2ViU2l0ZUtleSI6IkRldmljZSIsIlVzZXJJZCI6IjEyOCIsIm5iZiI6MTcwMTQxNTk0MiwiZXhwIjoxNzMyOTUxOTQyLCJpYXQiOjE3MDE0MTU5NDIsImlzcyI6Ik15VGlkeSIsImF1ZCI6Ikdsb2JhbFRyYWNlIn0.EWuX3C-fDX8_DP3XaLMEVxfRtdCmgVH6yX_YaFS9NAQ'
            }
        });
    }
}

const ArticoliDitta = new articoliDitta();
export default ArticoliDitta;