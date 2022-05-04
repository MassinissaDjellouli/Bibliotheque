import React from 'react'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { EmployeHeader } from '../Headers/employeHeader';
import { EmployeeList } from './EmployeeService/employeList';
export const Employes = ({employes}) => {
    return (
        <>
            <EmployeHeader />
            <EmployeeList employees={employes}/>
            <div className="row d-flex justify-content-center align-items-center">
                    <Link to="/" className="col-2 text-light text-decoration-none">
                        <button className="col-12 btn btn-primary m-3 py-2">Page d'accueil</button>
                    </Link>
            </div>
        </>
    )
}