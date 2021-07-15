import React, { useState, useContext, } from "react"
import { useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from "react-router"
import "./Employee.css"



export const EmployeeForm = () => {
    const { addEmployee /*getEmployeeById, updateEmployee*/ } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    })

    const history = useHistory();
    // const {employeeId} = useParams();

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }
        /* Employee is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)
      }
      

      const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        
        const locationId = parseInt(employee.locationId)
        
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {

            const newEmployee = ({
                name: employee.name,
                locationId: employee.locationId
            })
            addEmployee(newEmployee)
            .then(() => history.push("/employees"))

        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Eomployee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee Name" value={employee.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={ handleClickSaveEmployee }> Save Employee
            </button>
        </form>
    )

}