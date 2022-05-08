import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { useParams } from 'react-router-dom';

export const Emprunt = ({getUser}) => {
    let clientNumber = useParams().id;
    let user = getUser(clientNumber);
    if (user == undefined) {
        return <></>
    }
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Emprunt</h1>
                <div className='row d-flex justify-content-center my-4'>
                    <div className='card col-6' >
                        <div className='card-header text-center'>
                            <h3>Informations du client:</h3>
                        </div>
                        <div className='card-body'>
                            <h5>Nom et prénom: {user.clientName}</h5>
                            <h5>Numéro de téléphone: {user.clientPhone}</h5>
                            <h5>Adresse: {user.clientAdress}</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}