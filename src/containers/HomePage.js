import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
    titleBox, homePageTitle, homePageSubtitle, centerContents, homePageButton,
    prototypeWarning
} from '../utils/style';

class HomePage extends Component {
  render() {
    return (
      <div id='HomePage'>

        <div id='HomeContent'>

          <div style={titleBox}>

            <h1 style={homePageTitle}>
              Cliff Effects Tool
            </h1>

            <h2 style={homePageSubtitle}>
              GUIDANCE PROTOTYPE*
            </h2>

          </div>

          <div className='center-contents' style={centerContents}>

            <div>
              <Link to='/visit/54321/1'>
              <Button style={homePageButton}>
                Get Started
              </Button>
              </Link>

              <Link to='/about'>
              <Button style={homePageButton}>
                Learn More
              </Button>
              </Link>
            </div>

          </div>

          <p style={prototypeWarning}>*
            This is a prototype and should not be used to make financial decisions.
          </p>

        </div>

      </div>
    )
  }
}

export default HomePage;
