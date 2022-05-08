import React from "react";
export const DocumentCard = ({document,index}) =>{
    const getTypedInfo = () =>{
        if(document.genre == undefined){
            return (
                <>
                    <p>Type de média: {document.type}</p>
                    <p>Durée: {document.duree}</p>
                </>
            )
        }
        return (
            <>
                <p>Nombre de pages: {document.nbPages}</p>
                <p>Genre : {document.genre}</p>
            </>
        )
    }
    const getResultNb = () =>{
        if(index > -1){
            return "Resultat #" + (index+1) + ": "
        }
        return "";
    }
    return(    
        <div className="card">
                <div className="card-header">
                    <h3 className="card-title text-center">
                        {getResultNb() + document.titre}
                    </h3>
                </div>
                <div className="card-body text-start">
                    <h5>Auteur: {document.auteur}</h5>
                    <h6>Année de publication: {document.anneeDePublication}</h6>
                    <p>Editeur: {document.editeur}</p>
                    <p>Nombre d'exemplaires: {document.nbExemplaires}</p>
                    <p>Temps d'emprunt: {document.tempsEmprunt} Semaines</p>
                    {getTypedInfo()}
                </div>
        </div>

    ) 

}