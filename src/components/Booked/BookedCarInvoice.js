import React, { Component } from 'react'
import {connect} from "react-redux"
import {Link, Route, Redirect} from "react-router-dom"

export class BookedCarInvoice extends Component {
    constructor(props){
        super(props)}
    render(){
        const keyGenerate = this.props.bookedCar[this.props.bookedCar.length-1].keyGenerate
        return(
            <div className="cotainer d-flex p-5 justify-content-center align-items-center bg-booked">
                <div className="card bg-light col-md-4 col-12 my-5">
                <div className=" card-body h-100">
                    <img src="/images/booked.jpeg" className="img-fluid"/>
                    <h4>Booking Id # {keyGenerate}</h4>
                    <Link className="btn btn-info my-2" to="/">Go To Home Page</Link>
                </div>
                </div>
            </div>
        )
    }    
       
}
const mapStateToProps=state=>{
    return {
        bookedCar:state.bookedCar
        
    }
}


export default connect(mapStateToProps)(BookedCarInvoice)
