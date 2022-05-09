import React from "react";

export const EmpruntCard = ({ emprunt }) => {
    return (
        <div className="card m-3">
            <div className="card-header">
                <h4 className="card-title">{emprunt.documentName}</h4>
            </div>
            <div className="card-body">
                <h6>Date d'emprunt: {emprunt.empruntDate}</h6>
                <h6>Date de retour: {emprunt.returnDate}</h6>
                <h6>Retourné: {emprunt.returned == "true" ? "oui" : "non"}</h6>
            </div>
        </div>
    )
}