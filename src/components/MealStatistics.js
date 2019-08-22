import React from 'react'
import ReactApexChart from "react-apexcharts";
import { mealStatisticsConverter } from '../helpers/mealStatisticsConverter';

class MealStatistics extends React.Component {
      
    state = {
        options: {
            chart: {
                fontFamily: 'Raleway'
            },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '80%',
              endingShape: 'flat'	
            },
          },
          dataLabels: {
            enabled: true
          },
          stroke: {
            show: false,
            width: 0,
            colors: ['transparent']
          },
          grid: {
            show:false
          },
          xaxis: {
            categories: [this.props.meals[0].category, this.props.meals[1].category, this.props.meals[2].category,this.props.meals[3].category,this.props.meals[4].category,this.props.meals[5].category,this.props.meals[6].category]
          },
          yaxis: {
              show:false,
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1,
            colors: ['#5cc1a5']
          },
          tooltip: {
            show: false,
          },
          toolbar: {
              show: false
          }
        },
        series: [{
          data: [this.props.meals[0].data, this.props.meals[1].data, this.props.meals[2].data,this.props.meals[3].data,this.props.meals[4].data,this.props.meals[5].data,this.props.meals[6].data]
        }]
      }
    

    render() {
      return (
        

        <div id="statistics">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="250" />
        </div>

      );
    }
}

export default MealStatistics;

