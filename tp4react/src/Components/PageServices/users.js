import React from 'react'
import { Link } from 'react-router-dom';
import { UserHeader } from '../Headers/usersHeader';
import { UserList } from './UserService/userList';

export const Users = ({ users }) => {
    return (
        <>
            <UserHeader />
            <div className='row d-flex justify-content-center '>
                <h1 className='col-8 text-center m-4'>Inscription</h1>
                <Link to="/newUser" className='col-6 justify-content-center d-flex text-decoration-none'>
                    <button className='col-12 btn btn-outline-secondary p-4'>Nouveau client</button>
                </Link>
            </div>
            <UserList users={users} />
            <div className="row d-flex justify-content-center">
                <Link to="/" className="col-2 text-light text-decoration-none">
                    <button className="col-12 btn btn-secondary m-3 py-2">Page d'accueil</button>
                </Link>
            </div>
        </>
    )
}