import React, { Component } from 'react';
import Select from 'react-select';
import '../../node_modules/react-select/dist/react-select.css';

class Sform extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedField: {},
      selectedPosition: {}
    };

    this.onSubmit = this.onSubmit.bind(this)
  }

  handleFieldChange = (selectedField) => {
    this.setState({selectedField});
  };

  handlePositionChange = (selectedPosition) => {
    this.setState({selectedPosition})
  }

  onSubmit(e){
    e.preventDefault();
    this.props.history.push(`/audiorecord?field_id=${this.state.selectedField.value}&position_id=${this.state.selectedPosition.value}`)
  
    // If selected both then push to audiorecord page.

  }

  render() {
    const fields = [
      {value: '3', label: 'Accounting'},
      {value: '2', label: 'Health Care'},
      {value: '1', label: 'Information Technology'}
    ];

    const positions = [
      {value: '6', label: 'Accountant', link: '3'},
      {value: '7', label: 'Auditor', link: '3'},
      {value: '8', label: 'Tax Accountant', link: '3'},
      {value: '5', label: 'Nurse Practitioner', link: '2'},
      {value: '2', label: 'Data Analyst', link: '1'},
      {value: '3', label: 'Project Manager', link: '1'},
      {value: '1', label: 'Python Developer', link: '1'},
      {value: '4', label: 'Quality Analyst', link: '1'}
    ];

    const filteredPositions = positions.filter((position) => position.link === this.state.selectedField.value)

    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Update your information!</h1>
                  <div className="form-group">
                  <label htmlFor="field">Field</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedField.value}
                    onChange={this.handleFieldChange}
                    options={fields} required
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <Select
                    name="form-field-name"
                    value={this.state.selectedPosition.value}
                    onChange={this.handlePositionChange}
                    options={filteredPositions} required
                  />
                  </div>
                  <button type="submit"
                      className="btn btn-lg btn-primary btn-block">
                      Submit
                  </button>
            </form>  
            </div>
          </div>
       </div>
    );
  }
}

export default Sform


