import React from "react";
import { EmployeeCard } from "./EmployeCard";
export const EmployeeList = ({employees}) => {
    console.log(employees.length)
    return (
        <>
            {employees.map((employee) => {
                    return <EmployeeCard employee={employee} />
                }
            )}
        </>
    )
}