import React from "react";
import { Link } from "react-router-dom";
export const EmployeeCard = ({employee}) =>{
    return(    
        <Link to={employee.id} >
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">{employee.username}</h1>
            </div>
        </div>
        </Link>
    ) 

}