import React from 'react';
import RPT from 'prop-types';

const Tab = (props) => (
  <div className="tab-item">{props.children}</div>
);

Tab.propTypes = {
  children: RPT.arrayOf(RPT.node)
};

export default Tab;