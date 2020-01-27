import React from 'react'

export default function Table({carTable}) {
    return (
        <tr>
            <td>{carTable.keyGenerate}</td>
            <td>{carTable.car_model}</td>
            <td>{carTable.company}</td>
            <td>{carTable.from}</td>
            <td>{carTable.to}</td>
            <td>{carTable.riderName}</td>
            <td>{carTable.mobile}</td>
        </tr>
    )
}
