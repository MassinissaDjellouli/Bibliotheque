import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div class="row d-flex justify-content-center">
        <button class="btn btn-primary m-3 col-6 ">
            <Link to="/users" class="text-light text-decoration-none">Portail utilisateur</Link>
        </button>
        <button class="btn btn-primary m-3 col-6 ">
            <Link to="/employes" class="text-light text-decoration-none">Portail employé</Link>
        </button>
        </div>
    )
}