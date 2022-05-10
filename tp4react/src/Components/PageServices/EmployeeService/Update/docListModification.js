import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DocumentCard } from "../../UserService/Documents/documentCard";

export const DocumentListModifier = ({documents, setModifDoc}) => {
    const [selectedDoc, selectDoc] = useState({})
    useEffect(() =>{
        setModifDoc(selectedDoc);
        console.log(selectedDoc)
    })
    let navigate = useNavigate();
    const getDocType = () => {
        return selectedDoc.type != undefined ? "media" : "livre"
    }
    const getDialogButtons = () => {
        return (
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                    <Link to={"/employes/modifier/"+ getDocType() + "/" + selectedDoc.documentId}>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Modifier</button>
                    </Link>
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
                            <h5 className="modal-title">Document a modifier</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <DocumentCard document={selectedDoc}/>
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