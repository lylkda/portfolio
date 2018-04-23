import React, {Component} from 'react';
import {Grid, Image } from 'semantic-ui-react';
import Hangman from '../../images/hangman.png';
import Trivia from '../../images/Disney.png';
import Krystal from '../../images/krystal.png';
import Raven from "../../images/raven.png";
import WTFSIC from "../../images/wtfsic.jpg";
import Teach from "../../images/attendance.jpg";
import time from "../../images/time.png";
import Memory from "../../images/fma.jpg";
import "./Work.css";

class Work extends Component{
    render(){
        return(
            <Grid container centered columns={3} style={{ 'position': 'relative' }}>
             <Grid.Row>
              <Grid.Column>
                <Image src={Hangman} href='https://github.com/lylkda/Hangman'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Hangman Game</h4>
              </Grid.Column>
              <Grid.Column>
                <Image src={Trivia} href='https://github.com/lylkda/TriviaGame'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Disney Trivia</h4>
              </Grid.Column>
              <Grid.Column>
                <Image src={Raven} href='https://github.com/lylkda/psychic-game'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Psychic Game</h4>
              </Grid.Column>
             </Grid.Row>

             <Grid.Row>
              <Grid.Column>
                <Image src={time} href="https://github.com/lylkda/Train"
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Train (MomentJS)</h4>
              </Grid.Column>
              <Grid.Column>
                <Image src={Krystal} href='https://github.com/lylkda/Krystal-Kollector'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Krystal Kollector Game</h4>
              </Grid.Column>
              <Grid.Column>
                <Image src={WTFSIC} href='https://github.com/lylkda/WTFSIC'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>WTF Should I Cook?</h4>
              </Grid.Column>
             </Grid.Row>

             <Grid.Row>
              <Grid.Column>
                <Image src={Memory} href="https://github.com/lylkda/MemoryGame"
                    style={{'fontSize': 120}} avatar />
                <h4>FMA Memory Game</h4>
              </Grid.Column>
              <Grid.Column>
                        <Image src={Teach} href='https://github.com/rampagesang/teachaid'
                    style={{ 'fontSize': 120 }} avatar />
                <h4>Teach Aid</h4>
              </Grid.Column>


             </Grid.Row>
            
        </Grid>
        
        )
    }
}

export default Work;