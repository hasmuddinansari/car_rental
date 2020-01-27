import React, { Component } from 'react'
import Dashboard from "../Dashboard/Dashboard"
import {BrowserRouter, Route} from 'react-router-dom'
import BookCar from "../Booked/BookCar"
import BookedCarInvoice from "../Booked/BookedCarInvoice"
import BookedHistoryTable from "../Report/BookedHistoryTable"
import BookedHistoryChart from "../Report/BookedHistoryChart"


export class Routes extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={(props=><Dashboard {...props}/>)}/>
                <Route exact path="/carreport/report/reports" component={(props=><BookedHistoryTable {...props}/>)}/>
                <Route exact path="/carreport/report/reports/chart" component={(props)=><BookedHistoryChart {...props}/>}/>
                <Route exact path="/:id" component={(props=><BookCar {...props}/>)}/>
                <Route exact path="/:id/:idBooked" component={(props=><BookedCarInvoice {...props}/>)}/>
                
            </BrowserRouter>
        )
    }
}

export default Routes

