import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserHeader } from '../../../Headers/usersHeader'
import { RetourList } from './retourList';

export const Retour = ({getUser}) => {
    const [emprunts,setEmprunts] = useState([]);
    let clientNumber = useParams().id;
    let user = getUser(clientNumber);
    useEffect(() => {
        getEmprunts(user);
    })
    
    const getEmprunts = async (user) => {
        let data = await getRequest("/users/" + user.clientNumber + "/emprunts");
        setEmprunts(data);
    }
    
    const getRequest = async (path) => {
        let request = await fetch("http://localhost:8080" + path)
        let data = await request.json();
        return data;
    }
    
    
    if (user == undefined) {
        return <></>
    }
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Retourner</h1>
                <RetourList emprunts={emprunts} user={user}/>
            </div>
        </>
    )
}