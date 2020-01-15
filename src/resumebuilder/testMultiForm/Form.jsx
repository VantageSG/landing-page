import React, { Component } from "react";
import { Form, Segment, Button, Container, Card } from "semantic-ui-react";
import FormPage1 from "./formPages/FormPage1";
import FormPage2 from "./formPages/FormPage2";
import FormPage3 from "./formPages/FormPage3";

const FormActionButtons = props => {
  console.log(props.step);
  console.log(props.maxStep);
  return (
    <div className="ui two buttons">
      <Button
        color="red"
        onClick={props.previousStep}
        content="previous"
      ></Button>
      <Button.Or />

      {props.step === props.maxStep ? (
        <Button color="grey"></Button>
      ) : (
        <Button color="green" onClick={props.nextStep} content="next"></Button>
      )}
    </div>
  );
};

export default class FormStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 2,
      step: 0,
      paragraph: "",
      firstName: "",
      lastName: "",
      email: "",
      question2: "",
      question3: ""
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  previousStep = () => {
    const { step } = this.state;
    if (step > 0) {
      this.setState({ step: step - 1 });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { step, maxStep } = this.state;
    const {
      firstName,
      lastName,
      email,
      password,
      question2,
      question3
    } = this.state;
    const values = { firstName, email, password, question2, question3 };
    {
      switch (step) {
        case 0:
          return (
            <Container text>
              <Card centered fluid>
                <Segment>
                  <FormPage1
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    handleChange={this.handleChange}
                    previousStep={this.previousStep}
                    nextStep={this.nextStep}
                  />
                </Segment>
                <Card.Content extra>
                  <FormActionButtons
                    step={step}
                    maxStep={maxStep}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                  />
                </Card.Content>
              </Card>
            </Container>
          );

        case 1:
          return (
            <Container text>
              <Card centered fluid>
                <Segment>
                  <FormPage2
                    question2={this.question2}
                    handleChange={this.handleChange}
                    previousStep={this.previousStep}
                    nextStep={this.nextStep}
                  ></FormPage2>
                </Segment>
                <Card.Content extra>
                  <FormActionButtons
                    step={step}
                    maxStep={maxStep}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                  />
                </Card.Content>
              </Card>
            </Container>
          );
        case 2:
          return (
            <Container text>
              <Card centered fluid>
                <Segment>
                  <FormPage3
                    question3={question3}
                    handleChange={this.handleChange}
                    previousStep={this.previousStep}
                    nextStep={this.nextStep}
                  ></FormPage3>
                </Segment>
                <Card.Content extra>
                  <FormActionButtons
                    step={step}
                    maxStep={maxStep}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                  />
                </Card.Content>
              </Card>
            </Container>
          );
      }
    }
  }
}
