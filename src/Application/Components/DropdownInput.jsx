import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const DropdownInput = React.createClass({
  propTypes: {
    fieldName: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
  },

  getInitialState() {
    return {
      options: ['juan', 'deux'],
      fieldName: 'TempName',
    };
  },

  render() {
    const options = this.props.options;
    const fieldName = this.props.fieldName;

    return (
      <div className="input-row row">
        <div className="col-md-2"></div>
        <div className=" dropdown-input col-md-8">
          <DropdownButton title={fieldName} id="bg-nested-dropdown">
            {options.map((option, index) => {
              return <MenuItem key={index} eventKey={index}>{option}</MenuItem>;
            })}
          </DropdownButton>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  },
});

export default DropdownInput;
