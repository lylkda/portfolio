import React from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Socials = () => (
<Grid centered columns={3} style={{'padding-top': 20, 'padding-bottom': 20}}>
    <Button style={{backgroundColor: '#3a8860', color: 'white'}} size='huge' href='mailto:lylkda@gmail.com'>
    <Icon name='mail' />Email Me
  </Button>
  <Button color='linkedin' size='huge' href='https://www.linkedin.com/in/linda-kly/'>
    <Icon name='linkedin'/>LinkedIn
  </Button>
  <Button color="github" size='huge' href='https://github.com/lylkda'>
    <Icon name='github' />GitHub
  </Button>
</Grid>
)

export default Socials