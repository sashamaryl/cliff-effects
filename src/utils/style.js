

//    App.js     //
// none //


//   BetaWarning.js   //
//  none  //


//    index.css    //


body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

form .field-aligner {
  display: inline-block;
  text-align: left;
}

#App {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#root {
  height:  100%;
}

#HashRouter {
  flex: 1 0;
  display: flex;
  flex-direction: column;
}

#HomePage {
  background-image: url(./images/splash.svg) !important;
  background-size: cover !important;
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#HomeContent {
  flex: 1 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/*
Used to fill vertical space.
`height: 100%` doesn't work with Flexbox on Mobile Safari.
*/
.flex-column {
  display: flex!important;
  flex-direction: column;
}
.flex-item {
  flex: 1 0;
}

.center-contents {
  display: flex;
  justify-content: center;
}

.ui.form h4.ui.header.cashflow-column,
.ui.form .cashflow .cashflow-column {
  display: inline-block;
  margin-right: .2em !important;
  width: 7em;
  text-align: center;
}

.ui.form h4.ui.header.cashflow-column:last-child,
.ui.form .cashflow .cashflow-column:last-child {
  text-align: left;
  width: auto;
  padding-left: 1em !important;
}

.ui.form .cashflow .cashflow-column .ui.input input[type="number"] {
  text-align: right;
  width: 7em;
  display: inline-block;
}

/* One of these two groups */
.info-revealer .info-tooltip {
    display: none;
}
.info-revealer:hover .info-tooltip,
.info-revealer:active .info-tooltip {
    display: inline-block;
}
.info-revealer:hover .info-indicator,
.info-revealer:active .info-indicator {
    display: none;
}

.label-info { display: inline; }
.label-info.hidden { display: none; }


.massive-toggle .ui.toggle.checkbox input~label:before {
    background-color: rgba(0, 0, 0, 0.23);
}
.massive-toggle .ui.toggle.checkbox input~label:after {
    transform: scale(0.85) translate(10%, 0);
}
.massive-toggle .ui.toggle.checkbox input:focus~label:before {
    background-color: rgba(0, 0, 0, 0.4);
}
.massive-toggle .ui.toggle.checkbox input:checked~label:after {
    transform: scale(0.85) translate(-10%, 0);
}

#addMember {
    padding: 0;
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-top: 0.7rem;
}

/* Override text unselectable in semantic-ui-react */
/* though .ui.menu .text.item > *,
.ui.menu .item > a:not(.ui),
.ui.menu .item > p:only-child
are all user-select: text as is
.ui.dimmer > .content
*/
.ui.checkbox input.hidden+label,
.ui.button,
.ui.dimmer,
.ui.divider,
.ui.multiple.dropdown > .label,
ul.ui.list li:before,
.ui.bulleted.list .list > .item:before,
.ui.bulleted.list > .item:before,
ol.ui.list li:before,
.ui.ordered.list .list > .item:before,
.ui.ordered.list > .item:before,
.ui.menu .item,
.ui.sortable.table thead th.sorted,
.ui.sortable.table thead th.sorted:hover {
    user-select: all;
}

/* Remove controls from Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
/* Remove controls from Safari and Chrome */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
  margin: 0; /* Removes leftover margin */
}


//   index.js   //
//  none  //


//    ResultsGraph.js   //
//  none  //


//     dummyClients.js   //
//   none   //


//     VisitPage.js    ///

className='flex-item flex-column' style={{ padding: '42px 0' }}
style={{ padding: '42px 0' }}
<div className="flex-item flex-column" style={{ padding: '14px 0' }}>



//   BenefitsTable.js   /


const   columnHeaderStyle = {
                            background: 'rgba(0, 181, 173, 1)',
                            color: 'white',
                            fontSize: '1.3em',
                            fontWeight: 900,
                            textAlign: 'center',
                            borderRadius: 'inherit',
                            letterSpacing: '0.02em',
                            }
      , totalsRowStyle    = {
                            borderTop: "2px solid rgba(0, 181, 173, 1)",
                            fontWeight: 700,
                            fontSize: '1.1em',
                            padingTop: '0.25em'
                              }
      , rowHeaderStyle    = {
                    fontSize: '1.1em',
                    fontWeight: 700,
                    textAlign: 'left'
                    }
      , totalsRowHeaderStyle = {
                    fontSize: '1.2em',
                    fontWeight: 700,
                    textAlign: 'left',
                    borderTop: "2px solid rgba(0, 181, 173, 1)",
                    padingTop: '0.25em'


      };

      <Table.Row style={{border: 'none'}}>




//    currentExpenses.js    //


      <Form.Field style={{display: 'inline-block', paddingRight: '1em'}}>
       <span style={{textDecoration: 'underline'}}>Income</span> 
      <Form.Field style={{display: 'inline-block', paddingRight: '1em'}}>





//    formHelpers.js  //


33  <Button fluid type='button' color='teal' size='large' className={className} onClick={func}>

89  const flexItemStyle = { flexBasis: '118.3px' };
90  const buttonProps = { style: flexItemStyle, type: 'button', color: 'teal', size: 'large' }; 
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
201  style={{ display: 'block', textAlign: 'left' }}>
357       styles      = { fontSize: '14px' };
360      <wrapper style={{ display: 'inline-block' }}>




//    Predictions.js    //

31    <wrapper className='field-aligner two-column'>
49    <Header as='h1' className='ui Header teal align centered'>Results</Header>
50    <Header as='h3' className='ui Header align centered'>How will your income affect your future benefits?</Header>
70    <Form className = 'income-form flex-item flex-column'>
77    <Divider className='ui section divider hidden' />



//    CLIENT_DEFAULTS.js   //
//   none   //


//    getMembers.js    //
//   none   //


//    math.js   //
//   none   //

//    prettifiers.js    //
//   none   //



//    Result.js  [ResultsGraph?]  //

144    <wrapper className = 'result-page flex-item flex-column'>



//    validators.js      //
// none //    
    
    
//    valueFixers.js    //
// none //    























 // ***WILL***
AboutContent.js *W
FixedMenu.js *W
MainMenu.js *W
setupTests.js *W
AboutPage.js *W
HomePage.js *W
current-benefits.js *W
currentIncome.js *W
Household.js *W
cashflow.js *W
getGovData.js *W
getTimeSetter.js *W
registerServiceWorker.js *W
setNestedProperty.js *W
stylesObjects.js *W