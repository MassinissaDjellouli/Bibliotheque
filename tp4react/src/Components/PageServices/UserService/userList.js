import React from "react";
import { UserCard } from "./userCard";
export const UserList = ({ users }) => {
    return (
        <div>
            <h1 className="text-center">Connection</h1>
            {users.map((user) => {
                return (
                    <div className="m-3 d-flex justify-content-center row">
                        <div className="col-6">
                            <UserCard user={user} />
                        </div>
                    </div>)
            }
            )}
        </div>
    )
}