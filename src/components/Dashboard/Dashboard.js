import React, { Component } from 'react'
import { connect } from 'react-redux'
import CarCard from "./CarCard"
import {Link} from "react-router-dom"


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            range:1000,
            location:"",
            carName:"",
            carData:this.props.carData
        }
    }
    handleChange=(e)=>{
        this.setState({
            carData:this.props.carData.filter(car=>{
                return car.location == e.target.value
            })
        })
    }
    rangeChange=(e)=>{
        this.setState({
            carData:this.props.carData.filter(car=>{
                return e.target.value >=0 && car.rent_price <= e.target.value
            }),
            range:e.target.value
        })
    }
    searchChange=(e)=>{
        this.setState({
            carData:this.props.carData.filter(car=>{
                return car.car_model.startsWith(e.target.value)
            })
        })
    }
    render() {
        var {carData} = this.state
        const allLocation=this.props.state.carData.map(car=>{
            return car.location
        })
        const uniqLocation = {}
        allLocation.forEach(location=>{
             uniqLocation[location]=location    
        })
        //getting single location
        const locations = []
        for(let key in uniqLocation){
            locations.push(key)
        }
        locations.sort()
        return (
            <div className="dash-bg">        
            <div className="navbar bg-dark">
                {/* locatin by search */}
                <div className="nav nav-item col-md-4 col-12">
                    <div>
                    <h4 className="text-white">Location</h4>
                    <select className="custom-select col-12" name="location" onChange={this.handleChange}>
                        <option selected disabled>Select Location</option>
                        {locations && locations.map(locate=>{
                            return <option key={locate} value={locate}>{locate}</option>
                        })}
                    </select>
                    </div>
                </div>
                {/* car rent by range */}
                <div className="nav nav-item col-md-4 col-12">
                    <div>
                    <h4 className="mx-1 text-white">Rent Range</h4>
                    <input name="range" className="col-12 form-control" type='range' onChange={this.rangeChange} min="1000" max="50000" step="1000"/>
                   <p className="mx-3 text-white">
                   {this.state.range}
                   </p>
                   </div>
                </div>
                <div className="col-md-4 col-12">
                    <input placeholder="Search By Car Name" onChange={this.searchChange} name="carName" className="form-control" type="text" />
                </div>
            </div>
            <div className="border border-dark bg-light text-right">
             <Link className="btn btn-info" to="/carreport/report/reports">Report</Link>
            </div>
            <div className="container row justify-content-center m-4 ">
               {carData && carData.map(car=>{
                  return <CarCard match={this.props.match} key={car.id} car={car}/>
               })} 
            </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        carData:state.carData,
        state:state,
        locationData:state.locationFilter
    }
} 

export default connect(mapStateToProps)(Dashboard)
