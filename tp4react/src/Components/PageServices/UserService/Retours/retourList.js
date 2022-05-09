import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmpruntCard } from "../Emprunts/empruntCard";

export const RetourList = ({emprunts,user}) => {
    let navigate = useNavigate();
    const retourner = async () =>{
        await fetch("http://localhost:8080/user/" + user.clientNumber + "/retourner/" + selectedEmprunt.empruntId,
        {
            method:"POST"
        })
        navigate("/users/" + user.clientNumber)
    } 
    const [selectedEmprunt, selectEmprunt] = useState({})
    if(emprunts.length < 1){
        return <h4 className="text-danger">Aucun emprunts trouvés</h4>
    }
    let nonRetourne = [];
    emprunts.forEach(element => {
        console.log(element)
        if(element.returned == "false"){
            nonRetourne.push(element);
        }
    });
    if(nonRetourne.length < 1){
        return <h4 className="text-danger">Aucun emprunts trouvés</h4>
    }
    return (
        <div className="container">
            <h5 className="text-center m-4">Selectionnez de votre liste d'emprunts</h5>
            {
                nonRetourne.map((emprunt) => {
                    return (<>
                        <div data-bs-toggle="modal" data-bs-target="#dialog" onClick={() => { selectEmprunt(emprunt) }}
                            className="btn my-3 d-flex justify-content-center m-0">
                            <div className="col-12">
                                <EmpruntCard  emprunt={emprunt}/>
                            </div>
                        </div>

                    </>)
                }) 
            }
            <div class="modal fade" id="dialog" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmation du retour</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <EmpruntCard emprunt={selectedEmprunt} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={retourner}>Retourner</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}