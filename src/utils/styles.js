
 /*****************\
||				   ||
\\     App.js      //
||				   ||
 \*****************/



 /*****************\
||				   ||
\\  BetaWarning.js //
||				   ||
 \*****************/


 /*****************\
||				   ||
\\    index.css    //
||				   ||
 \*****************/


//body
const body = {
	margin: 0,
	padding: 0, 
	fontFamily: 'sans-serif'
};

//form .field-aligner
const form = {
	fieldAligner: {
		display: 'inline-block', 
		textAlign: 'left'
	}
};


//#App
const App = {
  minHeight: 100%,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

//#root
const root = {
	height: 100%
};

//#HashRouter
const HashRouter = {
	flex: 1 0, 
	display: 'flex', 
	flexDirection: 'column'
};

//#HomePage
const HomePage = {
	backgroundImage: 'url(./images/splash.svg)',
	backgroundSize: 'cover', 
	flex: 1 0, 
	display: 'flex', 
	flexDirection: 'column', 
	justifyContent: 'center',
	alignItems: 'center'
}; 

//.flex-column
const flexColumn = {
	display: 'flex', 
	flexDirection: 'column'
}

//.flex-item
const flexItem = {
	flex: 1 0
};


//.center-contents 

const centerContents = {
  display: 'flex',
  justifyContent: 'center'
};

//.ui.form h4.ui.header.cashflow-column,
//.ui.form .cashflow .cashflow-column 

const cashflowForms = {
  display: 'inline-block',
  marginRight: '.2em !important',
  width: '7em',
  textAlign: 'center'
};


//.ui.form h4.ui.header.cashflow-column:last-child,
//.ui.form .cashflow .cashflow-column:last-child 

const cashflowColumn = {
  textAlign: 'left',
  width: 'auto',
  paddingLeft: '1em !important'
};


//.ui.form .cashflow .cashflow-column .ui.input input[type="number"] 

const cashflowInput = {
  textAlign: 'right',
  width: '7em',
  display: 'inline-block'
};



/*

These not currently being used, just present in comments. 

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


These are in a component, but I do not think that the component is being used. 

.label-info { display: inline; }
.label-info.hidden { display: none; }

*/


/**The massive-toggle styles are applied, but I don't believe they are doing anywork**/

//.massive-toggle .ui.toggle.checkbox input~label:before 
const toggleBefore = {
    backgroundColor: 'rgba(0, 0, 0, 0.23)'
};

//.massive-toggle .ui.toggle.checkbox input~label:after 
const toggleAfter = {
    transform: 'scale(0.85) translate(10%, 0)';
};

// .massive-toggle .ui.toggle.checkbox input:focus~label:before 
const toggleLabelBefore = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
};

//.massive-toggle .ui.toggle.checkbox input:checked~label:after 
const toggleLableAfter = {
    transform: 'scale(0.85) translate(-10%, 0)'
};


//#addMember
const addMember = {
    padding: 0,
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    marginTop: '0.7rem'
};


/*** There are some more ui altering ones, but I don't think they are actually doing anything **/




 /*****************\
||				   ||
\\    index.js     //
||				   ||
 \*****************/


 /*****************\
||				   ||
\\ ResultsGraph.js //
||				   ||
 \*****************/


 /*****************\
||				   ||
\\ dummyClients.js //
||				   ||
 \*****************/


 /*****************\
||				   ||
\\  VisitPage.js   //
||				   ||
 \*****************/



 /*****************\
||				   ||
\\ BenefitsTable.js//
||				   ||
 \*****************/



const   columnHeaderStyle = {
    background: 'rgba(0, 181, 173, 1)',
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 900,
    textAlign: 'center',
    borderRadius: 'inherit',
    letterSpacing: '0.02em',
    };

const totalsRowStyle = {
    borderTop: "2px solid rgba(0, 181, 173, 1)",
    fontWeight: 700,
    fontSize: '1.1em',
    padingTop: '0.25em'
    };

const rowHeaderStyle = {
	fontSize: '1.1em',
	fontWeight: 700,
	textAlign: 'left'
	};

const totalsRowHeaderStyle = {
    fontSize: '1.2em',
    fontWeight: 700,
    textAlign: 'left',
    borderTop: "2px solid rgba(0, 181, 173, 1)",
    padingTop: '0.25em'
    };
const basicRow = {
	textAlign: 'right'
}




 /********************\
||				      ||
\\ currentExpenses.js //
||				      ||
 \********************/


//form field radio button in utilties 
const formField = {
	display: 'inline-block',
	paddingRight: '1em'
};

//uses field-aligner two-column


 /********************\
||				      ||
\\  formHelpers.js    //
||				      ||
 \********************/

style or button component constructino
const BottomButtons = function({ left, right }) {
  const flexItemStyle = { flexBasis: '118.3px' };
  const buttonProps = { style: flexItemStyle, type: 'button', color: 'teal', size: 'large' }; 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      { left ?
        <Button {...buttonProps} onClick={left.func}>
          { left.name }
        </Button>
        :
        <div style={flexItemStyle} />
      }
      { right ?
        <Button {...buttonProps} onClick={right.func}>
          { right.name }
        </Button>
        :
        <div style={flexItemStyle} />
      }
    </div>
  );
}; 


//uses flex-item and flex column, again, not sure they are doing anything

//styles in Form Headings

const FormSubheading = {
	display: 'block',
	textAlign: 'left'
};


const FormHeading = {
	display: 'inline-block'
};

const inlineLabelInfo = {
	marginLeft: '1em'
}

const IntervalColumnHeadings = {
	fontSize: '14px',
	display: 'inline-block'
}

//'COLOR' can be included as part of the styles ... should we?



Predictions.js *S
CLIENT_DEFAULTS.js *S
getMembers.js *S
math.js *S
prettifiers.js *S
Result.js *S
validators.js *S
valueFixers.js *S


	











// AboutContent.js *W
// FixedMenu.js *W
// MainMenu.js *W
// setupTests.js *W
// AboutPage.js *W
// HomePage.js *W
// current-benefits.js *W
// currentIncome.js *W
// Household.js *W
// cashflow.js *W
// getGovData.js *W
// getTimeSetter.js *W
// registerServiceWorker.js *W
// setNestedProperty.js *W
// stylesObjects.js *W
