import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { Link, Route, Routes, useParams } from 'react-router-dom';


export const UserHome = ({ getUser }) => {
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
                <div class="accordion" id="accordeon">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseEmprunt">
                                Emprunter un livre
                            </button>
                        </h2>
                        <div id="collapseEmprunt" class="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div class="accordion-body d-flex justify-content-center">
                                <Link to="emprunter">
                                    <button className='btn btn-success'>Emprunter</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseRetour">
                                Retourner un livre

                            </button>
                        </h2>
                        <div id="collapseRetour" class="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div class="accordion-body">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseListe">
                                Voir ma liste d'emprunts
                            </button>
                        </h2>
                        <div id="collapseListe" class="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div class="accordion-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}