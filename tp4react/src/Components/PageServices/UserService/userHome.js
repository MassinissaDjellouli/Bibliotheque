import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { useParams } from 'react-router-dom';


export const UserHome = ({users}) => {
    let clientNumber = useParams().id;
    let user;
    users.map((client) => {
        if(client.clientNumber == clientNumber) 
            user = client;
    })
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h3>Bienvenue {user.clientName}</h3>
            </div>
        </>
    )
}