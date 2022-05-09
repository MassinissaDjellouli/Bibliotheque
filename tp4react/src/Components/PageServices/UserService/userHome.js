import React, { useEffect, useState } from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { EmpruntList } from './Emprunts/listeEmprunts';
import { Retour } from './Retours/retours';


export const UserHome = ({ getUser }) => {
    const [emprunts,setEmprunts] = useState([]);
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

    let clientNumber = useParams().id;
    let user = getUser(clientNumber);
    if (user == undefined) {
        return <></>
    }
    return (
        <>
            <UserHeader />
            <div className='container'>
                <h3 className='my-4'>Bienvenue {user.clientName}</h3>
                <div className="accordion" id="accordeon">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseEmprunt">
                                Emprunter un document
                            </button>
                        </h2>
                        <div id="collapseEmprunt" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body d-flex justify-content-center">
                                <Link to="emprunter">
                                    <button className='btn btn-success'>Emprunter</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseRetour">
                                Retourner un document

                            </button>
                        </h2>
                        <div id="collapseRetour" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body d-flex justify-content-center">
                                <Link to="retourner">
                                        <button className='btn btn-danger'>Retourner</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseListe">
                                Voir ma liste d'emprunts
                            </button>
                        </h2>
                        <div id="collapseListe" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body">
                                <EmpruntList emprunts={emprunts}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}