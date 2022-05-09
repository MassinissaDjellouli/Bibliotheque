import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
    return (
        <Link to={user.clientNumber} className="text-decoration-none text-dark text-center">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{user.clientName}</h2>
                </div>
            </div>
        </Link>
    )
}