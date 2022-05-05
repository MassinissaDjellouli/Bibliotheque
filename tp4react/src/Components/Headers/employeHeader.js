import React from 'react'
import { Link } from 'react-router-dom'
 
export const EmployeHeader = () =>{
    return (
    <Link to="/employes" className='text-decoration-none'>
        <h1 className="bg-primary text-light py-3 text-center">Portail employé</h1>
    </Link>
    )
    
}