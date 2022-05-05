import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { useParams } from 'react-router-dom';
import { UserCreationForm } from './userCreationForm';

export const NewUser = () => {
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Inscription</h1>
                <UserCreationForm />
            </div>
        </>
    )
}