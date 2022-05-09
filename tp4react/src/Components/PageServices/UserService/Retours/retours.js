import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserHeader } from '../../../Headers/usersHeader'
import { RetourList } from './retourList';

export const Retour = ({ getUser, getRequest }) => {
    const [emprunts, setEmprunts] = useState([]);

    useEffect(() => {
        getEmprunts(user);
    })

    const getEmprunts = async (user) => {
        let data = await getRequest("/users/" + user.clientNumber + "/emprunts");
        setEmprunts(data);
    }

    let clientNumber = useParams().id;
    let user = getUser(clientNumber);

    if (user == undefined) {
        return <></>
    }
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Retourner</h1>
                <RetourList emprunts={emprunts} user={user} />
            </div>
        </>
    )
}