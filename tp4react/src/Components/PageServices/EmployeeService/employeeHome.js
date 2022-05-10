import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { EmployeHeader } from '../../Headers/employeHeader';

export const EmployeHome = ({ getEmploye }) => {

    let id = useParams().id;
    let employee = getEmploye(id);

    return (
        <>
            <EmployeHeader />
            <div className='container'>
                <h3>Bienvenue {employee.username}</h3>
                <div className="accordion" id="accordeon">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseEmprunt">
                                Ajouter un livre
                            </button>
                        </h2>
                        <div id="collapseEmprunt" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body d-flex justify-content-center">
                                <Link to="/employes/newLivre">
                                    <button className='btn btn-primary'>Nouveau livre</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseRetour">
                                Ajouter un média
                            </button>
                        </h2>
                        <div id="collapseRetour" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body d-flex justify-content-center">
                                <Link to="/employes/newMedia">
                                    <button className='btn btn-primary'>Nouveau média</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseModif">
                                Modifier un document
                            </button>
                        </h2>
                        <div id="collapseModif" className="accordion-collapse collapse"
                            data-bs-parent="#accordeon">
                            <div className="accordion-body d-flex justify-content-center">
                                <Link to="/employes/modifier">
                                    <button className='btn btn-primary'>Modifier</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}