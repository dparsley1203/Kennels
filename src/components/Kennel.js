// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { Employee } from "./employee/EmployeeCard"
// import { Location } from "./location/LocationCard"
// import { Customer } from "./customer/CustomerCard"
// import { PropsAndState } from "./PropsAndState"
// import "./animal/Animal.css"
// import "./employee/Employee.css"
// import "./location/Location.css"
// import "./customer/Customer.css"



import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>
//         <PropsAndState yourName={"Daniel"} />
//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard dogName="Glitzy" age={8}/>
//             <AnimalCard />
//             <AnimalCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <Employee />
//             <Employee />
//             <Employee />
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <Location />
//             <Location />
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <Customer />
//             <Customer />
//             <Customer />
//             <Customer />
//         </article>
//     </>
// )