import React from 'react'
import { Link } from 'react-router-dom';

export const Employes = () => {
    return (
        <>
            <h1 className="bg-primary text-light py-3 text-center">Portail employé</h1>
            <div className="row d-flex justify-content-center align-items-center">
                    <Link to="/" className="col-2 text-light text-decoration-none">
                        <button className="col-12 btn btn-primary m-3 py-2">Page d'accueil</button>
                    </Link>
            </div>
        </>
    )
}