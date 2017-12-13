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
const centerContents = {
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
