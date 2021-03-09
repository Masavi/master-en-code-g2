import React from 'react';
import useForm from '../hooks/useForm';
// si voy a cambiar la data mientras se encuentra montado el componente
// eso sisgnifica que voy a utilizar el estado
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Ejecuté send form', inputs);
        axios.post('http://localhost:9000/login', inputs)
            .then(({data, status})=>{
                console.log(data, status);
                const { token } = data;
                // const token = data.token;
                window.localStorage.setItem('token', token);
                history.push('/');
            })
            .catch(error => {
                console.error(error.response.data);
            })
    };

    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm,
        {
        email:"mali",
        password:"gatitos59"
    });

    return(
        <>
                <Navbar/>
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
                <div className="row">
                <div  className="col-7 mt-3">
                    <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" value={inputs.email} required onChange={handleInputs} className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
                    </div>
                </div>
                <div  className="col-7 mt-3">
                    <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input type="password" value={inputs.password} required onChange={handleInputs} className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping"/>
                    </div>
                </div>
                <div className="col-6 mt-4">
                    <button type="submit" className="btn btn-info">Iniciar sesión</button>
                </div>
                </div>
            </div>
        </form>
        </>
    );
}