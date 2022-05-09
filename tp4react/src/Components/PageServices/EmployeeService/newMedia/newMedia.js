import React from 'react'
import { EmployeHeader } from '../../../Headers/employeHeader'
import { MediaCreationForm } from './mediaCreationForm'

export const NewMedia = ({submit}) => {
    return (
        <>
            <EmployeHeader />
            <div className='container'>
                <h1 className='text-center'>Ajout d'un Media</h1>
                <MediaCreationForm submit={submit}/>
            </div>
        </>
    )
}