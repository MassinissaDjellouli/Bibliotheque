import React from 'react'
import { EmployeHeader } from '../../../Headers/employeHeader'
import { LivreCreationForm } from './livreCreationForm'

export const NewLivre = ({submit}) => {
    return (
        <>
            <EmployeHeader />
            <div className='container'>
                <h1 className='text-center'>Ajout d'un livre</h1>
                <LivreCreationForm submit={submit}/>
            </div>
        </>
    )
}