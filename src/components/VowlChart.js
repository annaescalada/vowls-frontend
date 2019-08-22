import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends Component {

state = {
    options: {
        width: 350,
        labels: ['Cereales integrales', 'Alimentos proteicos', 'Tubérculos', 'Cruciferas', 'Hortalizas', 'Otras verduras'],
        colors: ['#f1f1f1'],
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
    events: {
        click: undefined,
      beforeMount: undefined,
      mounted: undefined,
      updated: undefined,
      legendClick: undefined,
      selection: undefined,
      dataPointSelection: undefined,
      dataPointMouseEnter: undefined,
      dataPointMouseLeave: undefined,
      beforeZoom: undefined,
      zoomed: undefined,
      scrolled: undefined,
      },
    series: [15, 20, 15, 16, 18, 16],
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