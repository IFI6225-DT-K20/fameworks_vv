import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
        <h1>React, Babel ja Webpack OK!</h1>
    );
  }
}

export default Form;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;