import React from "react";
import { EmployeeCard } from "./EmployeCard";

export const EmployeeList = ({ employees }) => {
    return (
        <div>
            <h1 className="text-center">Connection</h1>
            {
                employees.map((employee) => {
                    return (
                        <div className="m-3 d-flex justify-content-center row">
                            <div className="col-6">
                                <EmployeeCard employee={employee} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}