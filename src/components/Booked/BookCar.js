import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bookCar, locationFuelChange, bookTimes} from  "../Redux/Action"
import {Link} from "react-router-dom"

var keyGenerate = 3948
export class BookCar extends Component {
    constructor(props){
        super(props)
        this.state={
            toggle:false,
            car:{},
            bookCar:{
                riderName:"",
                to:"",
                mobile:"",
                car_model:"",
                from:"",
                company:"",
                keyGenerate:"",
            }
        }
    }
    handleSubmit =()=>{
        const {riderName,car_model, to, mobile} = this.state.bookCar
        const {id} = this.state.car
        if(riderName.length==0 || to.length==0 || mobile.length==0){
            alert("All field mendotary to fill")
        }
        else {
            this.props.bookCar({...this.state.bookCar, keyGenerate:keyGenerate++})
            const newCarInfo = {...this.state.car, fuel:this.state.car.fuel-3, location:to}
            this.props.locationFuelChange(newCarInfo,id)
            this.props.bookTimes(this.state.car.car_model)
            alert(`${car_model} is booked now.`)
            this.setState({
                ...this.state,
                toggle:true,
                bookCar:{
                    ...this.state.bookCar,
                    to:"",
                    mobile:"",
                    riderName:""
                }
            })
        }
    }
    handleChange = e=>{
        this.setState({
            ...this.state,
            bookCar:{
                ...this.state.bookCar,
                [e.target.name]:e.target.value,
            }
        })
    }

    componentDidMount(){
       const car= this.props.carData.find(car=>{
           return car.id == this.props.match.params.id
        })
        this.setState({
            ...this.state,
            car:car,
            bookCar:{
                ...this.state.bookCar,
                from:car.location,
                car_model:car.car_model,
                company:car.car_company
            }
        })
    }
    render() {
        const {riderName, to, mobile} = this.state.bookCar
        console.log(this.state)
        const {car_model, car_company, rent_price, location, img, fuel} = this.state.car
        return (
            <>
            <div className=" book-bg">
            <Link className="btn btn-dark" to="/">Go Back</Link>
            </div>
            <h3 className="text-center">{car_model}({car_company})</h3>
            <div className="container-fluid book-bg">
                <div className='p-5 row justify-content-center'>
                <div className="col-md-6 col-12 ">
                    <img src={img} className="img-fluid img-resize"/>
                </div>
                <div className="col-md-6 col-12 my-2">
                    <div className="border border-dark">
                        <ul className="list-group shadow">
                            <li className="list-group-item">Model : {car_model}</li>
                            <li className="list-group-item">Company : {car_company}</li>
                            <li className="list-group-item">Rent : {rent_price} $</li>
                            <li className="list-group-item">Location: {location}</li>
                            <li className="list-group-item">Fuel: {fuel} Litre</li>
                        </ul>
                    </div>
                </div>
            <div className="col-md-12 col-12 m-1 p-2 row">
                <h1 className='text-center col-12'>Book Car</h1>
                <div className="col-md-4 col-12">
                    <label className="m-1">From</label>
                    <input onChange={this.handleChange} type="text" disabled value={location}  className="form-control "/>
                </div>  
                    <div className="col-md-4 col-12">
                    <label className="m-1">To</label>
                    <input value={to} onChange={this.handleChange}  name="to" type="text" className="form-control "/>
                </div >
                    <div className="col-md-4 col-12">
                    <label className="m-1">Rider Name</label>
                    <input value={riderName} onChange={this.handleChange} name="riderName" type="text"  className="form-control "/>
                </div>  
                    <div className="col-md-4 my-3 col-12">
                    <label>Mobile</label>
                    <input value={mobile} onChange={this.handleChange} name="mobile" type="text"  className="form-control "/>
                </div>
                    <div className="col-md-4 col-12 my-5">   
                    <input onClick={this.handleSubmit} type="button"  className="btn btn-success col-5 form-control" value="BOOK"/>
                    </div>
                {this.state.toggle ? <div className="col-md-4 col-12 my-5">  
                    <Link to={`${this.props.match.url}/${this.state.car.id}Booked`} className="btn btn-outline-danger">Get Receipt</Link> 
                </div> :null}     
            </div>
            </div>   
            </div>
            </>
        )
    }
}
const mapStateToProps=state=>{
    return {
        carData:state.carData,
        bookedCar:state.bookedCar
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        bookCar:carInfo=>dispatch(bookCar(carInfo)),
        locationFuelChange:(newCarInfo,id)=>dispatch(locationFuelChange(newCarInfo, id)),
        bookTimes:(car_model)=>dispatch(bookTimes(car_model))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCar)
