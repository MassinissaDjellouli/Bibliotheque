import React from 'react'
import { DocumentCard } from './documentCard';

export const DocumentList = ({documents}) => {
    if(documents == undefined || documents.length == 0){
        return <h3 className='text-center text-danger'>Aucun documents à afficher</h3>
    }
    return (
        <div>
            {documents.map((document) => {
                return (
                    <div className="m-3 d-flex justify-content-center row">
                        <div className="col-6">
                            <DocumentCard document={document} />
                        </div>
                    </div>)
            }
            )}
        </div>
    )
}