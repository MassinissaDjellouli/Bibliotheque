import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DocumentCard } from './documentCard';

export const DocumentList = ({ documents, user, empruntLength }) => {
    const [selectedDoc, selectDoc] = useState({})

    let navigate = useNavigate();

    const emprunter = async () => {
        let request = await fetch("http://localhost:8080/user/" + user.clientNumber + "/emprunter/" + selectedDoc.documentId,
            {
                method: "POST"
            })
        let data = await request.json();
        console.log(data);
        navigate("/users/" + user.clientNumber)
    }

    const getDialogContent = () => {
        if (empruntLength == 3) {
            return <h3 className='text-center text-danger'>Nombre d'emprunts maximal atteint</h3>
        }
        if (selectedDoc.nbExemplaires == "0") {
            return <h3 className='text-center text-danger'>Aucun exemplaires disponnibles</h3>
        }
        return <DocumentCard document={selectedDoc} index={-1} />
    }

    const getDialogButtons = () => {
        if (selectedDoc.nbExemplaires != "0" && empruntLength < 3) {
            return (
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={emprunter}>Emprunter</button>
                </div>
            )
        }
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
            </div>
        )
    }

    if (documents == undefined || documents.length == 0) {
        return <h3 className='text-center text-danger'>Aucun documents à afficher</h3>
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
            <div className="modal fade" id="dialog" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmation de l'emprunt</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            {
                                getDialogContent()
                            }
                        </div>
                        {
                            getDialogButtons()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}