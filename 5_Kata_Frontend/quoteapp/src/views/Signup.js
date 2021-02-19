import React from 'react';
import useForm from '../hooks/useForm';

export default function Signup() {
    const sendForm2Elregresodelosformsasesinos = (inputs) => {
        console.log('Ejecuté sendForm2Elregresodelosformsasesino', inputs);
    };
    
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm2Elregresodelosformsasesinos, {});

    return(
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
            <div className="row">
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" value={inputs.email} onChange={handleInputs} className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" value={inputs.first_name} onChange={handleInputs} className="form-control" id="first_name" placeholder="Primer Nombre" aria-label="first_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" value={inputs.last_name} onChange={handleInputs} className="form-control" id="last_name" placeholder="Apellido" aria-label="last_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password" value={inputs.password} onChange={handleInputs} className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" value={inputs.password_confirmation} onChange={handleInputs} className="form-control" id="password_confirmation" placeholder="Confirmación de contraseña" aria-label="password_confirmation" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className="col-6 mt-4">
                <button type="submit" class="btn btn-info">Crear Cuenta</button>
            </div>
            </div>
        </div>
        </form>
    );
};