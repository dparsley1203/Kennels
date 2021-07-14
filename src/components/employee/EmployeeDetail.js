import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams } from "react-router-dom"




export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})

    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeById(employeeId)
        .then((response) => {
            setEmployee(response)
        })
    }, [])

    return (
        <section className="employee">
          <h3 className="employee__name">{employee.name}</h3>
          <div className="employee__location">Location: {employee.location?.name}</div>
          <div className="employee__address">Address: {employee.location?.address}</div>
        </section>
      )
}