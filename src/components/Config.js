import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateFormConfigs } from '../actions/form';
import { connect } from 'react-redux';

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: JSON.stringify(props.config, null, 1),
      hasError: false,
      success: false
    };
  }

  updateFormConfigs =() => {
    const { updateFormConfigs } = this.props;
    let newConfig = {};

    try {
      newConfig = JSON.parse(this.configInput.value);
      this.setState({hasError: false, success: true});
    } catch (e) {
      this.setState({hasError: true, success: false});
    }

    updateFormConfigs(newConfig);
  }

  handleChange = (event) => {
    this.setState({config: event.target.value});
  }

  render() {
    const { config, hasError, success } = this.state;

    return (
      <div>
        <textarea 
          value={config} 
          ref={(el) => (this.configInput = el)} 
          onChange={this.handleChange}
          rows={80}
          cols={50}
        />
        <button onClick={this.updateFormConfigs} className="button">Apply</button>
        {hasError && <p className="error">Config is invalid</p>}
        {success && <p className="success">Successful update!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ config: state.form.formConfig });

const mapDispatchToProps = dispatch => ({ updateFormConfigs: (config) => dispatch(updateFormConfigs(config)) });

Config.propTypes = {
  updateFormConfigs: PropTypes.func,
  config: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);
