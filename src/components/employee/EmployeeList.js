import React, {useContext, useEffect} from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {

    const {employees, getEmployees} = useContext(EmployeeContext)
    const history = useHistory()
    useEffect(() => {
        getEmployees()

    }, [])

    return (
    <>
        <h1>Employees</h1>

        <button onClick={() => history.push("/employees/create")}>
          New Employee
      </button>

        <div className="employees">
          {
            employees.map(employee => {
              return <EmployeeCard key={employee.id} employee={employee} />
            })
          }
        </div>
    </>
      )
}