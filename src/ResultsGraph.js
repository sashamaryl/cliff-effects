import _ from 'lodash'
import React from 'react';
import { Line, Bar, HorizontalBar } from 'react-chartjs-2';
import Chart from 'chart.js';
import { Divider } from 'semantic-ui-react';

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
// current benefits snap and sec8, future benefits snap and sec8 





var myTimeline = {
  data: {
    type: 'Bar',
    labels: ['Eligibility'],
    datasets: [
      { 
        label: ['Eligible'],
        data: [500], 
        backgroundColor: ['rgba(120,50,90,1)']
      },
      {
        label: ['Potentially Eligible'],
        data: [200], 
        backgroundColor: ['rgba(220,40,40,1)']
      },
      {
        label: ['not eligibile'],
        data: [400], 
        backgroundColor: ['rgba(100,180,120,0.4)']
      }]
    },
  options: {
    title: {
      display: true, 
      text: 'Your Income Compared to Eligibility Requirements'
    },
    // legend: { 
    //   display: false,
    //   position: 'left'
    //  },
    maintainAspectRatio: false, 
    scales: {
      xAxes: [{
        stacked: true,
        ticks: { 
          beginAtZero: true, 
          min: 0
        },
        scaleLabel: {
          display: true, 
          labelString: 'Income'
        }
      }],
      yAxes: [{
        // type: 'category'
        stacked: true,
        barPercentage: 1,
        categoryPercentage: 1
      }]
    }
  }
};

var myTimelineDoubleTime = {
  data: {
    type: 'Bar',
    labels: [ 'Income', 'Eligibility'],
    datasets: [
      {
        label: ['Income'],
        data: [500,0],
        backgroundColor: 'teal'
      },
      { 
        label: ['Eligible'],
        data: [0, 300], 
        backgroundColor: 'rgba(30, 180, 20, 1)'
      },
      {
        label: ['Potentially Eligible'],
        data: [0, 100], 
        backgroundColor: 'rgba(220,40,40,1)'
      },
      {
        label: ['Not Eligibile'],
        data: [0,50], 
        backgroundColor: 'rgba(100,180,120,0.5)'
      }]
    },
  options: {
    title: {
      display: true, 
      text: 'Your Income Compared to Eligibility Requirements V2'
    },
    // maintainAspectRatio: false, 
    scales: {
      xAxes: [
      {
        stacked: true,
        ticks: 
        { 
          beginAtZero: true, 
          min: 0
        },
        scaleLabel: 
        {
          display: true, 
          labelString: 'Income'
        }
      }],

      yAxes: [
      {
        // type: 'category'
        barPercentage: 1,
        categoryPercentage: 1,
        ticks: 
        {
          beginAtZero: true
          // max: 1000
        },
        stacked: true
      }]
    }
  }
};



// var myBarChart = {
//   data: {
//     labels: ['now', 'future'], 
//     datasets: [
//       {
//         label: ['Income'],
//       data: [fakeClient.current.earned, fakeClient.future.earned], 
//       backgroundColor: 'rgba(120, 30, 60, 1)'
//       }
//     ]
//   }, 
//   options: {
//     responsive: true, 
//     title: {
//       display: true, 
//       text: 'Benefit Eligibility for Household Size'
//     },
//     showLines: true, 
//     stacked: true, 
//     scales: {
//       yAxes: {
//         stacked: true, 
//         scaleLabel: {
//           display: true, 
//           labelString: 'Annual Income ($)'
//         },
//         ticks: {
//           beginAtZero: true
//         }
//       }
//     },

//     tooltips: {
//           callbacks: {
//               // format the title of the tooltips to be in USD
//               title: function(tooltipItems, data) {
//                   return data.labels[tooltipItems[0].index].toLocaleString("en-US",
//                       {style:"currency",currency:"USD"}).replace('.00','');
//               },
//               /*
//                * to add number formatting to the tooltips. returns the data label
//                * + currency format
//                * from https://github.com/chartjs/Chart.js/issues/2386
//                */
//               label: function(tooltipItem, data) {
//                   return data.datasets[tooltipItem.datasetIndex].label + ": " +
//                       tooltipItem.yLabel.toLocaleString("en-US",{style:"currency",
//                           currency:"USD"}).replace('.00','');
//               }
//           }
//       }
//     }
//   }; 




  // Non-saving version for first prototype testing
  

  return (
    
  

    <wrapper className = 'result-page flex-item flex-column'>
      <FormPartsContainer
        title     = {'Results'}
        left      = {{ name: 'Go Back', func: props.previousStep }}
        right      = {{ name: 'Reset', func: function(){ document.location.reload() } }}
      >
         <div> <HorizontalBar data={myTimeline.data} options={myTimeline.options} padded={'very'} /></div>

         <Divider hidden padded={'very'} />
         <Divider padded={'very'} />
         <Divider hidden padded={'very'} />

         <div> <HorizontalBar data={myTimelineDoubleTime.data} options={myTimeline.options} padded={'very'} /></div>

         <Divider hidden padded={'very'} />
         <Divider padded={'very'} />
         <Divider hidden padded={'very'} />

{/*         <div> <Bar data={myBarChart.data} options={myBarChart.options} compact={true} /> </div>*/}


  </FormPartsContainer>
    </wrapper>
  )

};  // End Results()

export default ResultsGraph
