import React from 'react'
import { DocumentCard } from './documentCard';

export const DocumentList = ({documents}) => {
    if(documents == undefined || documents.length == 0){
        return <h3 className='text-center text-danger'>Aucun documents à afficher</h3>
    }
    console.log(documents)
    return (
        <div className='row'>
            {documents.map((document,index) => {
                return (
                    <div className="my-3 d-flex justify-content-center col-6 m-0">
                        <div className="col-12">
                            <DocumentCard document={document} index={index}/>
                        </div>
                    </div>)
            }
            )}
        </div>
    )
}