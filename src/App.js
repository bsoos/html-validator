import React, { Component } from "react";
import "./App.css";
import HtmlInput from "./components/html-input";
import ValidationOutput from "./components/validation-output";
import validator from "html-validator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { validationResult: [] };
  }

  handleChange = async event => {
    const data = event.target.value;
    const json = await validator({ data });
    const result = JSON.parse(json);
    this.setState({ validationResult: result.messages });
  };

  render() {
    return (
      <div className="container">
        <HtmlInput onChange={this.handleChange} />
        <ValidationOutput result={this.state.validationResult} />
      </div>
    );
  }
}

export default App;
