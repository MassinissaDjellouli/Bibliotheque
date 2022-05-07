import React from 'react'
import { useState } from 'react'
export const UserCreationForm = ({submit}) => {
    const [clientName,setName] = useState('');
    const [clientAdress,setAdress] = useState('');
    const [clientPhone,setPhone] = useState('');
    const onSubmit = (e) => {
        e.preventDefault()
        const client = {clientName,clientAdress,clientPhone}
        submit(client)
    }

    return (
        <form onSubmit={onSubmit} >
            <div>
                <label className='form-label' >Nom et prénom</label>
                <input className='form-control ' type="text" placeholder="2-45 characters"
                required minLength={2} maxLength={45}
                onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div>
                <label className='form-label'>Adresse</label>
                <input className='form-control ' type="text" placeholder="5-200 characters"
                required minLength={2} maxLength={200}
                onChange={(e) => {setAdress(e.target.value)}} />
            </div>
            <div>
                <label className='form-label' >Numéro de téléphone</label>
                <input className='form-control ' type="text" placeholder="1234567890" 
                required minLength={10} maxLength={10} pattern='^[0-9]{10}$'
                onChange={(e) => {setPhone(e.target.value)}} />
            </div>
            <div className='row d-flex justify-content-center'>
                <button className='btn btn-secondary mt-4 col-4'>Envoyer</button>
            </div>
        </form>
    )
}

