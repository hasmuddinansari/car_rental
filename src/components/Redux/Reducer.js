import {Database} from "../../Database/Database"

const initialState = {
    carData:Database,
    bookedCar:[],
    bookedTimesCar:{}
}

const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case "CAR_BOOK":
            return {
                ...state,
                bookedCar:[...state.bookedCar,action.payload]
            }
        case "FUEL_LOCATION_UPDATE":
            const older = state.carData.filter(car=>{
               return car.id !== action.id
            })
            const newCarInfo = action.payload
            return {
                ...state,
                carData:[...older, newCarInfo]
            }
        case "BOOKED_TIMES":
            var obj = state.bookedTimesCar
                if(obj[action.payload]==undefined){
                    obj[action.payload] = 1
                }
                else{
                    obj[action.payload] += 1
                }
            return {
                ...state,
                bookedTimesCar:obj
            }
            



        default:return state
    }
}

export default Reducer