import React from 'react';
import {Link} from 'react-router-dom';
import { Divider, List, Grid, Responsive} from 'semantic-ui-react';


const Nav = () => (
    <div>
        <Grid textAlign='center' stackable={true} columns={1}>
        <h1 className="title">
            Linda K. Ly
        </h1>
        </Grid>
        <Grid textAlign='center' stackable={true} columns={2}>
            <Grid.Column>
                <List bulleted horizontal link>
                    <List.Item as={Link} to='/work'>Work</List.Item>
                    <List.Item as={Link} to='/'>About</List.Item>
                    <List.Item as={Link} to='/contact'>Contact</List.Item>
                </List>
            </Grid.Column>
        </Grid>
        <Divider />
    </div>
)

export default Nav;
