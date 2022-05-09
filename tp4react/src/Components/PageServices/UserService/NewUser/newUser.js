import React from 'react'
import { UserHeader } from '../../../Headers/usersHeader'
import { UserCreationForm } from './userCreationForm';

export const NewUser = ({ submit }) => {
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Inscription</h1>
                <UserCreationForm submit={submit} />
            </div>
        </>
    )
}