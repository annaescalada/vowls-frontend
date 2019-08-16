import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";




class PieChart extends React.Component {

constructor(props) {
    super(props);

    this.state = {
    options: {
        width: 340,
        colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
        type: 'image',
        opacity: 1,
        image: {
            src: ['https://res.cloudinary.com/greenstinct/image/upload/v1565948661/pepper_yyinoi.jpg?size=50',
            'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/pumkin_nuxtvt.jpg?size=0',
            'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/eggplanrt_dli6my.jpg',
            'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/chard_mpgqpc.jpg',
            'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/edamames_q9jopp.jpg',
            'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/edamames_q9jopp.jpg'
          ],
            imageWidth: 20,
            imagedHeight: 0
        },
        },
        stroke: {
        width: 1
        },
        dataLabels: {
        enabled: false
        },
        responsive: [{
        breakpoint: 3000,
        options: {
            chart: {
            width: 340
            },
            legend: {
            position: 'bottom',
            show:false
            }
        }
        }]
    },
    series: [2,2,1,1,1],
    }
}

render() {
    return (
    

    <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100" />
    </div>


    );
}
}

export default PieChart;