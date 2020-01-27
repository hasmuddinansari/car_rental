import React, { Component } from "react";
import {Bar} from "react-chartjs-2";

export class BookedHistoryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Completed", "Not Completed", "Pending"],
        datasets: [
          {
            label: "",
            data: [0, 2, 3],
            backgroundColor: ["Green", "Red", "Black"],
            hoverBackgroundColor: "blue"
          }
        ]
      }
    };
  }  
  render() {
    return (
      <div className="p-5 container-fluid  bg-light">
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

export default BookedHistoryChart;
