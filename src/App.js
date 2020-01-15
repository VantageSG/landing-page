import React from 'react';
import logo from './logo.svg';
import {
  Header,
  Grid,
  Icon,
  Segment,
  Container,
  Button,
  Divider,
  Placeholder,
  Card,
  Responsive
} from "semantic-ui-react";
import { Animated } from "react-animated-css";
import './App.css';
import ResponsiveContainer from "./navbar/NavBar";
import ResumeBuilder from './resumebuilder/ResumeBuilder';

function App() {
  return (
    <div>
      <ResponsiveContainer loggedInStatus={false} user={{}}> 
      <Animated animationIn="fadeIn" isVisible={true}>
        <Responsive
        
        minWidth={Responsive.onlyTablet.minWidth}>


        <Container
          fluid
          textAlign="center"
          style={{
            marginLeft: "0em",
            marginBottom: "auto",
            minHeight: "50vh",
            backgroundColor: "#1b1c1d"
          }}
        >
          <Segment placeholder style={{ minHeight: "50vh" }} inverted>
            <Header as="h2" color="teal" textAlign="center" icon>
              <Icon name="home" />
              Welcome To Vantage
            </Header>
          </Segment>
        </Container>
        </Responsive>

        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
        <div style={{backgroundColor: "#1b1c1d"}}>
        <Segment placeholder style={{ minHeight: "50vh" }} inverted>
            <Header as="h2" color="teal" textAlign="center" icon>
              <Icon name="home" />
              Welcome To Vantage
            </Header>
          </Segment>
          </div>
        </Responsive>

        
       <ResumeBuilder></ResumeBuilder>
 
      </Animated>
      </ResponsiveContainer>
     
    </div>
  );
}

export default App;
