export const bookCar = (riderInfo)=>{
    return {
        type:"CAR_BOOK",
        payload:riderInfo
    }
}
export const locationFuelChange = (newCarInfo, id)=>{
    return {
        type:"FUEL_LOCATION_UPDATE",
        payload:newCarInfo,
        id:id
    }
}

export const bookTimes = (car_model)=>{
    return {
        type:"BOOKED_TIMES",
        payload:car_model
    }
}