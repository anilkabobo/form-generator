import Config from './components/Config';
import Form from './components/form/Form';
import React from 'react';
import Tabs, { Tab } from './components/tabs';

export default function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab name="tab1">
          <Form name="MyForm"/>
        </Tab>
        <Tab name="tab2">
          <Config />
        </Tab>
      </Tabs>
    </div>
  );
}
