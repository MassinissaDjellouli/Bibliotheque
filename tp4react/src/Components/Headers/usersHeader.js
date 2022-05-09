import React from "react";
import { Link } from "react-router-dom";

export const UserHeader = () => {
    return (
        <Link className='text-decoration-none' to="/users">
            <h1 className="bg-secondary text-light py-3 text-center">Portail utilisateur</h1>
        </Link>
    )
}