import React from 'react';
import {
  Grid,
  Segment,
} from 'semantic-ui-react';

import { AboutContent } from '../components/AboutContent';

import { aboutPage } from '../utils/style';

const AboutPage = () => {
    const padding = aboutPage.padding;
  return (
    <div>
      <Segment style={{ padding }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={10}>

              <AboutContent/>

            </Grid.Column>
            <Grid.Column floated='right' width={6}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default AboutPage;
