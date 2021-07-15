import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { LocationContext } from "../location/LocationProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)


  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
      getAnimals()
    // getLocations()
    // .then(getCustomers)
    // .then(getAnimals)

  }, [])

  useEffect(() => {
    if(searchTerms !== "") {
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(animals)
    }
  })

  return (
    <>

      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
          Make Reservation
      </button>
      <div className="animals">
          {
              filteredAnimals.map(animal => {
                  return <AnimalCard key={animal.id} animal={animal} />
              })
          }
      </div>
    {/* <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>

    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          // const owner = customers.find(c => c.id === animal.customerId)
          // const clinic = locations.find(l => l.id === animal.locationId)

          return <AnimalCard key={animal.id} 
                      // location={clinic}
                      // customer={owner}
                      animal={animal} />
    
        })
      }
    </div> */}
    </>  
  )
}