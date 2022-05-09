import React from 'react'
import { useState } from 'react'
export const LivreCreationForm = ({ submit }) => {
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [editeur, setEditeur] = useState('');
    const [anneeDePublication, setDate] = useState("2000");
    const [nbExemplaires, setNbEx] = useState("1");
    const [nbPages, setNbPages] = useState("1");
    const [genre, setGenre] = useState("roman");
    const onSubmit = (e) => {
        let tempsEmprunt = 3;
        const livre = {titre,auteur,editeur,anneeDePublication,tempsEmprunt,nbExemplaires,nbPages,genre}
        e.preventDefault()
        submit(livre)
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
                <label className='form-label' >Nombre de pages</label>
                <input className='form-control ' type="number"
                    required minLength={1} maxLength={7}  min={1}
                    onChange={(e) => { setNbPages(e.target.value.toString()) }} />
            </div>
            <div>
                <label className='form-label' >Genre</label>
                <select className='form-select'
                    onChange={(e) => {setGenre(e.target.value)}} required>
                    <option value="" selected disabled>Choisir une valeur</option>
                    <option value={"roman"}>Roman</option>
                    <option value={"manuel"}>Manuel</option>
                    <option value={"magazine"}>Magazine</option>
                    <option value={"etude"}>Etude</option>
                </select >
            </div>
            <div className='row d-flex justify-content-center'>
                <button className='btn btn-primary mt-4 col-4'>Envoyer</button>
            </div>
        </form>
    )
}

