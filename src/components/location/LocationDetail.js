import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
// import "./Location.css"


export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
    })
    }, [])



    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <br></br>
            <h4 className="location__names">Employees:</h4>
            <br></br>
            <div className="location__employees">
                {location.employees?.map(employee => {
                    return employee.name
                }).join(", ")}
            </div>
            <div className="location__residents">{location.breed}</div>
            <br></br>
            <h4 className="location__animals">Current Animals:</h4>
            <br></br>
            <div className="location__animals">{location.animals?.map(animal => {
                return animal.name
            }).join(", ")}</div>
        </section>
    )
}