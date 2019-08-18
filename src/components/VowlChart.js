import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";




class PieChart extends Component {

state = {
    options: {
        width: 350,
        colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
        type: 'image',
        opacity: 1,
        image: {
            src: [this.props.cereal.img, this.props.protein.img, this.props.tuber.img, this.props.cruciferous.img, this.props.greens.img, this.props.othervegs.img
          ],
            imageWidth: 20,
            imagedHeight: 20
        },
        },
        stroke: {
        width: 2
        },
        dataLabels: {
        enabled: false
        },
        responsive: [{
        breakpoint: 3000,
        options: {
            chart: {
            width: 350
            },
            legend: {
            position: 'bottom',
            show:false
            }
        }
        }]
    },
    series: [1,1,1,1,1,1],
    }

render() {
    return (
    

    <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="200" />
    </div>


    );
}
}

export default PieChart;