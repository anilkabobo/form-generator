import React, { Component } from 'react';
import { updateFieldValue } from '../../actions/form';
import { TextField, CheckboxField, RadioField, TextareaField, NumberField, DateField } from './fields'
import { connect } from 'react-redux';

class Field extends Component {

  renderField(item) {
    switch (item.type) {
      case 'text':
        return TextField
      case 'checkbox':
        return CheckboxField
      case 'radio':
        return RadioField
      case 'textarea':
        return TextareaField
      case 'number':
        return NumberField
      case 'date':
        return DateField
      default:
        return null
    }
  }

  render() {
    const { item, values, updateFieldValue } = this.props;
    const Field = this.renderField(item);

    if (!Field) {
      return null;
    }

    return (
      <div className="field-container">
        <div className="label">{item.label}</div>
        <div className="input-wrapper">
          <Field 
            item={item}
            value={values.get(item.label)} 
            onChange={(value) => updateFieldValue(item.label, value)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ values: state.form.values })

const mapDispatchToProps = dispatch => ({ updateFieldValue: (name, value) => dispatch(updateFieldValue(name, value)) })

export default connect(mapStateToProps, mapDispatchToProps)(Field);
