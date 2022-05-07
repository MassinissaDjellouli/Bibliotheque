import React from 'react'
import { useParams } from 'react-router-dom';

import { EmployeHeader } from '../../Headers/employeHeader';

export const EmployeHome = ({employes}) => {
    let id = useParams().id;
    console.log(employes)
    let employee;
    employes.map((employe) => {
        if(employe.id == id) {
            employee = employe;
    }
})
    return (
        <>
            <EmployeHeader />
            <div className='container'>
                <h3>Bienvenue {employee.username}</h3>
                <div class="accordion" id="accordeon">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapseEmprunt">
                                Ajouter un livre
                            </button>
                        </h2>
                        <div id="collapseEmprunt" class="accordion-collapse collapse"
                        data-bs-parent="#accordeon">
                            <div class="accordion-body">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseRetour">
                                Ajouter un média

                            </button>
                        </h2>
                        <div id="collapseRetour" class="accordion-collapse collapse" 
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