import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DocumentCard } from './documentCard';

export const DocumentList = ({ documents, user }) => {
    let navigate = useNavigate();
    const [selectedDoc, selectDoc] = useState({})
    if (documents == undefined || documents.length == 0) {
        return <h3 className='text-center text-danger'>Aucun documents à afficher</h3>
    }
    console.log(documents)
    const emprunter = async () => {
        let request = await fetch("http://localhost:8080/user/" + user.clientNumber + "/emprunter/" + selectedDoc.documentId,
        {
            method:"POST"
        })
        let data = await request.json();
        console.log(data);
        navigate("/users/" + user.clientNumber)
    }
    return (
        
        <div className='row'>
            {documents.map((document, index) => {
                return (
                    <>
                        <div data-bs-toggle="modal" data-bs-target="#dialog" onClick={() => { selectDoc(document) }}
                            className="btn my-3 d-flex justify-content-center col-6 m-0">
                            <div className="col-12">
                                <DocumentCard document={document} index={index} />
                            </div>
                        </div>

                    </>
                )
            }
            )}
            <div class="modal fade" id="dialog" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmation de l'emprunt</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <DocumentCard document={selectedDoc} index={-1} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={emprunter}>Emprunter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}