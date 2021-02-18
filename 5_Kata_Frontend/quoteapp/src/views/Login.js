import React from 'react';

export default function Login() {
    return(
        <div className="container my-4">
            <div className="row">
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password" className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className="col-6 mt-4">
                <button type="button" class="btn btn-info">Iniciar sesión</button>
            </div>
            </div>
        </div>
    );
};