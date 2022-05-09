import React from 'react'
import { useState } from 'react'

export const MediaCreationForm = ({ submit }) => {

    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [editeur, setEditeur] = useState('');
    const [anneeDePublication, setDate] = useState("2000");
    const [nbExemplaires, setNbEx] = useState("1");
    const [duree, setDuree] = useState("1");
    const [type, setType] = useState("dvd");

    const onSubmit = (e) => {
        let tempsEmprunt = type == "cd" ? "2" : "1";
        const media = { titre, auteur, editeur, anneeDePublication, tempsEmprunt, nbExemplaires, duree, type }
        e.preventDefault()
        submit(media)
    }

    return (
        <form onSubmit={onSubmit} >
            <div>
                <label className='form-label' >Titre</label>
                <input className='form-control ' type="text" placeholder="3-200 characters"
                    required minLength={3} maxLength={200}
                    onChange={(e) => { setTitre(e.target.value) }} />
            </div>
            <div>
                <label className='form-label'>Auteur</label>
                <input className='form-control ' type="text" placeholder="3-200 characters"
                    required minLength={3} maxLength={200}
                    onChange={(e) => { setAuteur(e.target.value) }} />
            </div>
            <div>
                <label className='form-label' >Editeur</label>
                <input className='form-control ' type="text" placeholder="3-200 characters"
                    required minLength={3} maxLength={200}
                    onChange={(e) => { setEditeur(e.target.value) }} />
            </div>
            <div>
                <label className='form-label' >Année de publication</label>
                <input className='form-control ' type="number"
                    required maxLength={4}
                    onChange={(e) => { setDate(e.target.value.toString()) }} />
            </div>
            <div>
                <label className='form-label' >Nombre d'exemplaires</label>
                <input className='form-control ' type="number"
                    required minLength={1} maxLength={10} min={1}
                    onChange={(e) => { setNbEx(e.target.value.toString()) }} />
            </div>
            <div>
                <label className='form-label' >Durée</label>
                <input className='form-control ' type="Text" placeholder="Format: 0-99999h59min"
                    required minLength={7} maxLength={11} min={1} pattern="[0-9]*h[0-5][0-9]min"
                    onChange={(e) => { setDuree(e.target.value) }} />
            </div>
            <div>
                <label className='form-label' >Type</label>
                <select className='form-select'
                    onChange={(e) => { setType(e.target.value) }} required>
                    <option value="" selected disabled>Choisir une valeur</option>
                    <option value={"cd"}>CD</option>
                    <option value={"dvd"}>DVD</option>
                </select >
            </div>
            <div className='row d-flex justify-content-center'>
                <button className='btn btn-primary mt-4 col-4'>Envoyer</button>
            </div>
        </form>
    )
}

