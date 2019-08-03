import React, { Component } from 'react';
import RPT from 'prop-types';
import './Tabs.css';

export default class Tabs extends Component {
  state = {
    activeTab: 0
  }

  static propTypes = {
    tabs: RPT.arrayOf(RPT.node),
  }

  setActive = (index) => {
    this.setState({
      activeTab: index
    })
  }

  renderTabsButtons() {
    const {children} = this.props;
    return children.map((child, index) => {
      const name = child.props.name;

      return (
        <div 
          key={name} 
          onClick={() => this.setActive(index)}
          className={`tab-button ${this.state.activeTab === index ? 'active' : ''} `}
        >
          {name}
        </div>
      )
    })
  }

  render() {
    const {children} = this.props;
    const activeTab = this.state.activeTab || 0;

    return (
      <div className="tabs-wrapper">
        <div className="tab-button-wrapper">
          {this.renderTabsButtons()}
        </div>
        <div className="tabs-content">
          {children.filter((child, index) => (index === activeTab))}
        </div>
      </div>
    );
  }
}

export { default as Tab } from './Tab';
