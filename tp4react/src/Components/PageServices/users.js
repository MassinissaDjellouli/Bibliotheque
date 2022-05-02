import React from 'react'
import { Link } from 'react-router-dom';
import { UserHome } from './UserService/userHome';
import { Routes, Route } from 'react-router-dom';

export const Users = () => {
    return (
        <>
            <h1 class="bg-secondary text-light py-3 text-center">Portail utilisateur</h1>
            <div className="row d-flex justify-content-center align-items-center">
                    <Link to="/" className="col-2 text-light text-decoration-none">
                        <button className="col-12 btn btn-secondary m-3 py-2">Page d'accueil</button>
                    </Link>
            </div>
            <Routes>
              <Route path="" element={<UserHome />}></Route>
            </Routes>
        </>
    )
}