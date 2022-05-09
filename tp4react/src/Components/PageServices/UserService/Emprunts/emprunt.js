import React from 'react'
import { UserHeader } from '../../../Headers/usersHeader'
import { useParams } from 'react-router-dom';
import { DocumentList } from '../Documents/documentList';
import { useState } from 'react'

export const Emprunt = ({ getUser,emprunter }) => {
    const [recherche, setRecherche] = useState("");
    //0 = titre, 1 = auteur, 2 = année, 3 = genre
    const [rechercheType, setRechercheType] = useState(0);
    const [documents, setDocuments] = useState([]);
    const getDocuments = (e) => {
        e.preventDefault();
        const fetchAndSetDocs = async (url) => {
            let request = await fetch(url)
            let data = await request.json();
            setDocuments(data);
        }
        let url;
        switch (rechercheType) {
            case 0:
                url = "http://localhost:8080/rechercheTitre/" + recherche;
                break;
            case 1:
                url = "http://localhost:8080/rechercheAuteur/" + recherche;
                break;
            case 2:
                url = "http://localhost:8080/rechercheAnne/" + recherche;
                break;
            case 3:
                url = "http://localhost:8080/rechercheGenre/" + recherche;
                break;
        }
        fetchAndSetDocs(url);
    }
    let clientNumber = useParams().id;
    let user = getUser(clientNumber);
    if (user == undefined) {
        return <></>
    }

    const getInput = () => {
        switch (rechercheType) {
            case 0:
                return <input className='form-control' type="text" placeholder='Rechercher un document'
                    onChange={(e) => { setRecherche(e.target.value) }} required></input>

            case 1:
                return <input className='form-control' type="text" placeholder='Rechercher un document par auteur'
                    onChange={(e) => { setRecherche(e.target.value) }} required></input>
            case 2:
                return <input className='form-control' type="number" placeholder='Rechercher un document par année'
                    onChange={(e) => { setRecherche(e.target.value) }} required></input>
            case 3:
                return <select className='form-select'
                    onChange={(e) => { setRecherche(e.target.value); console.log(recherche) }} required>
                    <option value="" selected disabled>Choisir une valeur</option>
                    <option value={"roman"}>Roman</option>
                    <option value={"manuel"}>Manuel</option>
                    <option value={"magazine"}>Magazine</option>
                    <option value={"etude"}>Etude</option>
                </select >
        }
    }

    return (
        <>
            <UserHeader />
            <div className='container'>
                <h1 className='text-center'>Emprunt</h1>
                <div className='row d-flex justify-content-center my-4'>
                    <div className='card col-6 p-0' >
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
                <h2 className='text-center'> Selectionnez un document </h2>
                <form onSubmit={getDocuments}>
                    <div className='input-group'>
                        {getInput()}
                        <button className='btn btn-outline-secondary' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 
                                1.398h-.001c.03.04.062.078.098.115l3.85
                                3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 
                                1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 
                                0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>

                    </div>
                    <div className='input-group d-flex justify-content-center my-3'>
                        <p>Type de recherche:</p>
                        <div class="form-check mx-4 col-1">
                            <input class="form-check-input" defaultChecked type="radio" name="typeRecherche" id="Titre"
                                onChange={() => { setRechercheType(0); }} />
                            <label class="form-check-label" for="Titre">
                                Titre
                            </label>
                        </div>
                        <div class="form-check mx-4 col-1">
                            <input class="form-check-input" type="radio" name="typeRecherche" id="Auteur"
                                onChange={() => { setRechercheType(1); }} />
                            <label class="form-check-label" for="Auteur">
                                Auteur
                            </label>
                        </div>
                        <div class="form-check mx-4 col-1">
                            <input class="form-check-input" type="radio" name="typeRecherche" id="Anne"
                                onChange={() => { setRechercheType(2); }} />
                            <label class="form-check-label" for="Anne">
                                Année
                            </label>
                        </div>
                        <div class="form-check mx-4 col-1">
                            <input class="form-check-input" type="radio" name="typeRecherche" id="Genre"
                                onChange={() => { setRechercheType(3); }} />
                            <label class="form-check-label" for="Genre" >
                                Genre
                            </label>
                        </div>
                    </div>
                </form>
                
                <DocumentList documents={documents} emprunter={emprunter} user={user}/>

            </div>
        </>
    )
}