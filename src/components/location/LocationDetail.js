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
            <div className="location__names">Employees:</div>
            <div className="location__employees">{location.employees?.name}</div>
            <div className="location__residents">{location.breed}</div>
        </section>
    )
}