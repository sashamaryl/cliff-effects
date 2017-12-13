

//    App.js     //
// none //


//   BetaWarning.js   //
//  none  //


//    index.css    //


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
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

//#root
const root = {
  height: '100%'
};

//#HashRouter
const HashRouter = {
  flex: '1 0', 
  display: 'flex', 
  flexDirection: 'column'
};

//#HomePage
const HomePage = {
  backgroundImage: 'url(./images/splash.svg)',
  backgroundSize: 'cover', 
  flex: '1 0', 
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
  flex: '1 0'
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


/**The massive-toggle styles are applied, but I don't believe they are doing any work**/

//.massive-toggle .ui.toggle.checkbox input~label:before 
const toggleBefore = {
    backgroundColor: 'rgba(0, 0, 0, 0.23)'
};

//.massive-toggle .ui.toggle.checkbox input~label:after 
const toggleAfter = {
    transform: 'scale(0.85) translate(10%, 0)'
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



/* Override text unselectable in semantic-ui-react */
/* though .ui.menu .text.item > *,
.ui.menu .item > a:not(.ui),
.ui.menu .item > p:only-child
are all user-select: text as is
.ui.dimmer > .content
*/

/*
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
*/

/* Remove controls from Firefox */
/*
input[type=number] {
  -moz-appearance: textfield;
}
/* Remove controls from Safari and Chrome */
/*
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
  margin: 0; /* Removes leftover margin */
//}


//   index.js   //
//  none  //


//    ResultsGraph.js   //
//  none  //


//     dummyClients.js   //
//   none   //


//     VisitPage.js    //


const flexColumnStyle = {
  className: 'flex-item flex-column',
  padding: '42px 0',
  };

const flexColumnStyle2 = {
  className: "flex-item flex-column",
  padding: '14px 0'
};

const paddingLight = {
  padding: '42px 0'
};



//   BenefitsTable.js   //


const columnHeaderStyle = {
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
  };

const tableRow = {
  border: 'none'
};




//    currentExpenses.js    //

//form field radio button in utilties 
const formField = {
  display: 'inline-block',
  paddingRight: '1em'
};

const underline = { //   this should be dropped, emphasis should be bold/strong 
  textDecoration: 'underline'
};

// uses field-aligner two-column



//    formHelpers.js  //

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


/*
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

*/

//    CLIENT_DEFAULTS.js   //
//   none   //


//    getMembers.js    //
//   none   //


//    math.js   //
//   none   //

//    prettifiers.js    //
//   none   //



//    Result.js  [ResultsGraph?]  //

// 144    <wrapper className = 'result-page flex-item flex-column'>



//    validators.js      //
// none //    
    
    
//    valueFixers.js    //
// none //    
















// AboutPage and AboutContent
const aboutPage = {
    fontSize: '4em',
    padding: '8em 0em',
};

// Home Page
const titleBox = {
    display: 'inline-block',
};
const homePageTitle = {
    fontSize: '5em',
    color: '#efefef',
    marginBottom: '-15px',
};
const homePageSubtitle = {
    fontSize: '2em',
    color: '#efefef',
    textAlign: 'right',
    marginTop: '-15px',
    marginRight: '45px',
};
const centerContentsMargin = {
    marginTop: '3em',
    marginBottom: '3em',
};
const homePageButton = {
    backgroundColor: '#ffffffc8',
    textColor: '#00b5ad',
    fontSize: '1.5em',
    marginRight: '1.5em',
    marginLeft: '1.5em',
};
const prototypeWarning = {
    color: '#efefef',
    textAlign: 'center',
    fontSize: '1em',
};

// Household page
const columnStyle = {
  display: 'inline-block',
  textAlign: 'center',
  marginTop: '0.7em',
  // marginBottom: '0.7em'
};
// ageColStyle is also applied to the leftmost column
const ageColStyle = {
    width: '5em',
};
const roleColStyle = {
    width: '20em', 
    textAlign: 'left', 
    paddingLeft: '1em',
};
const disabledColStyle = {
    width: '10em',
};
const memberButtonStyle = {
    padding: '0',
    height: '2.2em',
    width: '2.2em', 
};

// define var margin so that it can still be toggled in Household

const roleInfoStyle = {
    display: 'inline-block',
    width: '100%',
    textAlign: 'left', 
};
const addButtonStyle = {
    color: '#cfcfd0',
    fontSize: '2.2em',
    verticalAlign: 'text-top',
};

export {
    aboutPage, titleBox, homePageTitle, homePageSubtitle, centerContents,
    homePageButton, prototypeWarning, columnStyle, ageColStyle, roleColStyle,
    disabledColStyle, memberButtonStyle, roleInfoStyle, addButtonStyle
}
