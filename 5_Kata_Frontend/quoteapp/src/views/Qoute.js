import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Qoute(){
    const [quote, setQuote] = useState({});
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token) {
            const config = {
                headers: {
                    'Authorization': `JWT ${token}`
                }
            }
            axios.get('http://localhost:9000/quotes', config)
                .then(({data, status}) => {
                    console.log(data, status);
                    setQuote(data);
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        } else {
            history.push('/');
        }
    }, []);

    return (
    <>        <Navbar/>
    <div className="container">
        <div className="row">
            <h2>{quote.quote}</h2>
            <span>{quote.source}</span>
        </div>
    </div></>);
}