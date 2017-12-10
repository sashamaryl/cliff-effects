import _ from 'lodash'
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

// Logic
import { getSNAPBenefits } from './programs/federal/snap';
import { getHousingBenefit } from './programs/state/massachusetts/housing';

// Our Components
import { FormPartsContainer } from './forms/formHelpers';

const ResultsGraph = (props) => {
  var xRange = _.range(0, 100000, 1000);
  /** Need a new object so client's data doesn't get changed. */
  var fakeClient = _.cloneDeep( props.client );

  var snapData = xRange.map(annualIncome => {
      fakeClient.future.earned = annualIncome/12;
      return getSNAPBenefits(fakeClient).benefitValue * 12});

  /** Section-8 Housing Choice Voucher */
  /** @todo Base this rent on FMR areas and client area of residence if no rent available. */
  fakeClient.current.contractRent = 700;
  fakeClient.current.earned = 0;
  var housingData = xRange.map(function ( annualIncome ) {
    // New renting data
    fakeClient.future.earned = annualIncome/12;

    var result  = getHousingBenefit( fakeClient ),
        subsidy = result.benefitValue * 12;

    // Prep for next loop
    var newShare = result.data.newRentShare
    fakeClient.current.rentShare  = newShare;
    fakeClient.current.earned     = annualIncome/12;

    return subsidy;
  });

  // TAFDC color? "rgba(206, 125, 61, 1)"


//in: current income, future income, current benefits snap and sec8, future benefits snap and sec8 



  var myBarChart = {
    data: {
      labels: ['now', 'future'],
      datasets: [
        {
          label: ['Income'],
          data: [fakeClient.current.earned, fakeClient.future.earned],
          borderColor: 'maroon',
          backgroundColor: 'red'
        },
        {
          label: ["SNAP"], 
          data: [1300, 1150],
          borderColor: 'rgba(40,40,40,1)',
          backgroundColor: 'rgba(40,40,40, 0.5)'
        },
        {
          label: ["Section-8"],
          data: [2800,1800],
          borderColor: 'blue',
          backgroundColor: 'aqua'
        }
      ]
    },
    options: {
      responsive: true, 
      title: {
        display: true,
          text: 'Benefit Eligibility for Household Size ' +
                  props.client.householdSize
      },
      showLines: true,
      stacked: true, 
      maxBarThickness: 0.8, 
      categoryPercentage: 0.5, 
      barPercentage: 0.9, 
      scales: {
          yAxes: [{
            stacked: true, 
            scaleLabel: {
              display: true,
                labelString: 'Annual Income ($)'
            },
            ticks: {
                beginAtZero: true,
                /*
                 * function to add $ and 1,000s separators to graph axes
                 * we are using chart.js v2.7 so it requires a callback function
                 */
                callback: function(label) {
                    return label.toLocaleString("en-US");
                }
            }
          }],
          xAxes: [{
            stacked: true
          }]
      }
    },
        
    tooltips: {
          callbacks: {
              // format the title of the tooltips to be in USD
              title: function(tooltipItems, data) {
                  return data.labels[tooltipItems[0].index].toLocaleString("en-US",
                      {style:"currency",currency:"USD"}).replace('.00','');
              },
              /*
               * to add number formatting to the tooltips. returns the data label
               * + currency format
               * from https://github.com/chartjs/Chart.js/issues/2386
               */
              label: function(tooltipItem, data) {
                  return data.datasets[tooltipItem.datasetIndex].label + ": " +
                      tooltipItem.yLabel.toLocaleString("en-US",{style:"currency",
                          currency:"USD"}).replace('.00','');
              }
          }
      }
    }; 

  

var myTimeline = {
  type: 'Line', 
  data: {
    datasets: [{
      label: ['Edge Distance'],
      data: [fakeClient.future.earned, 400, (fakeClient.future.earned + 300)]
    }],
    labels: ["income", "current benefit", "lose benefit"]
  }
},
  options: {
    scales: {
      xAxes: {
        stacked:true
      }
    },
    }
  };

  // Non-saving version for first prototype testing
  

  return (
    
  

    <wrapper className = 'result-page flex-item flex-column'>
      <FormPartsContainer
        title     = {'Results'}
        left      = {{ name: 'Go Back', func: props.previousStep }}
        right      = {{ name: 'Reset', func: function(){ document.location.reload() } }}
      >
         <div> <Bar data={myBarChart.data} options={myBarChart.options} /> </div>
         <div> <Bar data={myTimeline.data} options={myTimeline.options} /> </div>
      </FormPartsContainer>
    </wrapper>
  )

};  // End Results()

export default ResultsGraph
