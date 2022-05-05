import React from "react";
import { Link } from "react-router-dom";
export const MainHeader = () => {
    return(
    <Link className='text-decoration-none' to="/">
        <h1 className="bg-dark text-light  text-center py-4 m-0">Bibliothèque de JavaTown</h1>
    </Link>
    )
}