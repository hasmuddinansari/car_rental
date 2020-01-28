import React from 'react'
import {Link} from "react-router-dom"

export default function CarCard({car, match}) {
    return (
        <div className="col-lg-4 col-md-6 my-2 col-12 ">
            <div className="card col-12">
            <div className="card-body">
                <img src={car.img} alt="" className="img-fluid img-resize"/>
                <ul className="list-group">
                    <li className="list-group-item bg-dark text-white">
                        Car Model : {car.car_model}
                    </li>
                    <li className="list-group-item bg-warning">
                        Company : {car.car_company}
                    </li>
                    <li className="list-group-item bg-primary text-white">
                        Rent Price : {car.rent_price} $
                    </li>
                    <li className="list-group-item bg-danger text-white">
                        Location : {car.location}
                    </li>
                    <li className="list-group-item bg-success text-white">
                       <h5>Fuel : {car.fuel} Litre</h5> 
                    </li>
                </ul>
                
                    <Link className="my-2 btn btn-info" to={`/${car.id}`}>Select</Link>
           
            </div>
            
        </div>
        </div>
    )
}
