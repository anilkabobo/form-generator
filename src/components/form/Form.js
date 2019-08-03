import React, { Component } from 'react'
import Field from './Field'
import './Form.css'
import { resetForm, submitForm } from '../../actions/form'
import { connect } from 'react-redux';

const availableActions = ['submit', 'cancel']

class Form extends Component {

  static defaultProps = {
    config: {}
  }

  renderButton(button) {
    const {formValues} = this.props;
    const action = this.props[button.action];

    if (availableActions.includes(button.action)) {
      return (
      <button onClick={() => action(formValues.toJS())} key={button.name}>
        {button.name}
      </button>
    )}
  }

  render() {
    const {config: {items, buttons, title }, name} = this.props;

    return (
      <div>
        <form name={name}>
          {title && 
            <legend>{title}</legend>
          }

          {items && items.length && items.map((item, index) => 
            <Field item={item} key={`${item.label}-${index}`} />
          )}
        </form>

        {buttons && buttons.length && buttons.map((button) => this.renderButton(button))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  config: state.form.formConfig,
  formValues: state.form.values
})

const mapDispatchToProps = (dispatch, props) => ({ 
  cancel: () => dispatch(resetForm()),
  submit: (values) => dispatch(submitForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)

