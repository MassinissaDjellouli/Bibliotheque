import React from "react";
import { EmpruntCard } from "../empruntCard";
export const EmpruntList = ({emprunts}) => {
    if(emprunts.length < 1){
        return <h4 className="text-danger">Aucun emprunts trouvés</h4>
    }
    return (
        <div className="container">
            <h5 className="text-center m-4">Liste d'emprunts</h5>
            {
                emprunts.map((emprunt) => {
                    return <EmpruntCard  emprunt={emprunt}/>
                }) 
            }
        </div>
    )
}