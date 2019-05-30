import React, { Component } from "react";

import Select from "../components/Select";
import Button from "../components/Button";

class Sform extends Component {
  constructor(props) {
    super(props);

    this.state = {

      positionOptions:["Accountant", "Auditor", "Tax Accountant"],

      fieldOptions: ["Accounting", "Health Care", "Information Technology"],
      positionOptionsValues: {
        "Accounting": [
          "Accountant", "Auditor", "Tax Accountant"
        ],
        "Health Care": [
          "Nurse Practitioner"
        ],
        "Information Technology": [
          "Data Analyst", "Project Manager", "Python Developer", "Quality Analyst"
        ]
      }
    };
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    
  }

  
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleFieldChange(e){
    // console.log(e.target.value);
    this.setState({
      positionOptions: this.state.positionOptionsValues[e.target.value]
    })
  }


  render() {
    return (
      <form className="container-fluid select-position-form" onSubmit={this.handleFormSubmit}>
        <Select
          title={"Field"}
          name={"field"}
          options={this.state.fieldOptions}
          placeholder={"Select Field"}
          handleChange={(e) => this.handleFieldChange(e)}
        />

        <Select
          title={"Position"}
          name={"position"}
          options={this.state.positionOptions}
          placeholder={"Select Position"}
          handleChange={this.handleInput}
        />{" "}
       
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Sform;
