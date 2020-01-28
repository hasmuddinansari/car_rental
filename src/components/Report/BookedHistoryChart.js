import React, { Component } from "react";
import {Bar} from "react-chartjs-2";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

export class BookedHistoryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Completed", "Not Completed", "Pending"],
        datasets: [
          {
            label: "Booked Car History",
            data: [0, 2, 3],
            backgroundColor: ["Green", "Red", "Black"],
            hoverBackgroundColor: "blue"
          }
        ]
      }
    };
  }
  componentWillMount(){
    const labels = Object.keys(this.props.bookedTimesCar)
    const values = Object.values(this.props.bookedTimesCar)
    const colors = []
    for(let i=0; i<labels.length; i++){
      var clr = 'rgba(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.random().toFixed(1) + ')'
      colors.push(clr)
    }
    this.setState({
      ...this.state,
      chartData:{
        ...this.state.chartData,
        labels:labels,
        datasets:[{
          ...this.state.chartData.datasets,
          data:values,
          backgroundColor:colors,
          hoverBackgroundColor: "blue"
        }]
      }
    })
  }  
  render() {
    console.log(this.state)
    return (
      <div className="p-5 container-fluid  bg-light">
        <Link className="btn btn-dark mx-3" to="/carreport/report/reports">
            Back To Table
          </Link>
          <Link className="btn btn-dark mx-1" to="/">
            Back To Home
          </Link>
        <div className="row">
          
          <div className="col-md-8 col-12">
          <h1>Car Booked History</h1>
            <Bar data={this.state.chartData}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state=>{
  return {
    bookedTimesCar:state.bookedTimesCar
  }
}
export default connect(mapStateToProps)(BookedHistoryChart);
