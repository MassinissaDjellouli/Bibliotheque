import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const UserCreationForm = () => {
    const [clientName,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [adress,setAdress] = useState('');
    const submit = (e) => {
        e.preventDefault()
        console.log(clientName)
        console.log(phone)
        console.log(adress)
    }
    return (
        <form onSubmit={submit} >
            <div>
                <label className='form-label' >Nom et prénom</label>
                <input className='form-control' type="text" placeholder="2-45 characters"  
                onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div>
                <label className='form-label' >Numéro de téléphone</label>
                <input className='form-control' type="text" 
                onChange={(e) => {setPhone(e.target.value)}} />
            </div>
            <div>
                <label className='form-label'>Adresse</label>
                <input className='form-control' type="text"
                onChange={(e) => {setAdress(e.target.value)}} />
            </div>
            <div className='row d-flex justify-content-center'>
                <button className='btn btn-secondary mt-4 col-4'>Envoyer</button>
            </div>
        </form>
    )
}

