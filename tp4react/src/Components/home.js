import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="row  align-items-center">
            <div className=' d-flex justify-content-center'>
                <Link to="/employes" className="col-6 text-light text-decoration-none">
                    <button className="btn btn-dark m-3 py-5 col-12">Portail employé</button>
                </Link>
            </div>
            <div className=' d-flex justify-content-center'>
                <Link to="/users" className="col-6 text-light text-decoration-none">
                    <button className="btn btn-dark m-3 py-5 col-12">Portail utilisateur</button>
                </Link>
            </div>
        </div>
    )
}