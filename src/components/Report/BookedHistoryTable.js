import React from 'react'
import {connect} from "react-redux"
import Table from './Table'
import {Link} from "react-router-dom"

function BookedHistoryTable(props) {
    return (
        <div className="p-5 bg-table">
        <div className="d-flex justify-content-between">
        <Link className="btn btn-success" to="/">Go to Home</Link>
        <Link className="btn btn-success" to={`${props.match.url}/chart`}>Chart</Link>
        </div>
        
        
        
        <table className="table">
            <tbody>
                <tr className="bg-dark text-white">
                <td>Booking Id</td>
                <td>Model</td>
                <td>Company</td>
                <td>From</td>
                <td>To</td>
                <td>Rider Name</td>
                <td>Mobile Num</td>
                </tr>
            </tbody>
            {props.bookedCar.length!==0 ? props.bookedCar.map(car=>{
                return <Table carTable={car}/>
            }):<div className="p-5 text-center">
                <h1>
                Not Booked Yet..
                </h1>
                
                </div>}
            
        </table>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        bookedCar:state.bookedCar
    }
}
export default connect(mapStateToProps)(BookedHistoryTable)