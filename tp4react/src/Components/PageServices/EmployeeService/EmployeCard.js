import React from "react";
import { Link } from "react-router-dom";

export const EmployeeCard = ({ employee }) => {
    return (
        <Link to={employee.id} className="text-decoration-none text-dark text-center">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{employee.username}</h2>
                </div>
            </div>
        </Link>
    )

}