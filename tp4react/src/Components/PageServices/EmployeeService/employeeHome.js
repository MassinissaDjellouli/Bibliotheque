import React from 'react'
import { useParams } from 'react-router-dom';

import { EmployeHeader } from '../../Headers/employeHeader';

export const EmployeHome = ({employes}) => {
    let id = useParams().id;
    console.log(employes)
    let employee;
    employes.map((employe) => {
        if(employe.id == id) {
            employee = employe;
    }
})
    return (
        <>
            <EmployeHeader />
            <div className='container'>
                <h3>Bienvenue {employee.username}</h3>
            </div>
        </>
    )
}