import React, { Component } from 'react';
import Select from 'react-select';
import '../../node_modules/react-select/dist/react-select.css';

class Sform extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedOption: {},
      selectedOption2: {}
    };
  }

  handleChange1 = (selectedOption) => {
    this.setState({selectedOption});
  };

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption})
  }

  render() {
    const options1 = [
      {value: 'one', label: 'Accounting'},
      {value: 'two', label: 'Health Care'},
      {value: 'three', label: 'Information Technology'}
    ];

    const options2 = [
      {value: 'one-a', label: 'Accountant', link: 'one'},
      {value: 'one-b', label: 'Auditor', link: 'one'},
      {value: 'one-c', label: 'Tax Accountant', link: 'one'},
      {value: 'two-a', label: 'Nurse Practitioner', link: 'two'},
      {value: 'three-a', label: 'Data Analyst', link: 'three'},
      {value: 'three-b', label: 'Project Manager', link: 'three'},
      {value: 'three-c', label: 'Python Developer', link: 'three'},
      {value: 'three-d', label: 'Quality Analyst', link: 'three'}
    ];

    const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption.value)

    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Update your information!</h1>
               <div>
                  <div className="form-group">
                  <label htmlFor="field">Field</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange1}
                    options={options1}
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedOption2.value}
                    onChange={this.handleChange2}
                    options={filteredOptions}
                  />
                  </div>
                  <button type="submit"
                      className="btn btn-lg btn-primary btn-block">
                      Submit
                  </button>
                </div>
             </div>
          </div>
       </div>
    );
  }
}

export default Sform
