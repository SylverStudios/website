import React from 'react';

import MainContent from './Components/MainContent';
import NavBar from './Components/NavBar';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  content: 'content-section',
  studio: 'studio',
};


// Major Components
const Application = React.createClass({
  getInitialState() {
    return {
      activeTab: 'home',
    };
  },

  onActiveTabChange(tabKey, tabName) {
    // This is kind of a hack.
    // When the tab has a dropdown (the About tab) 
    // then the tabName is the value we want.
    tabName ? this.setState({ activeTab: tabName }) : this.setState({ activeTab: tabKey });
  },

  render() {

    return (
      <div>
        <NavBar activeTab={this.state.activeTab} onActiveTabChange={this.onActiveTabChange} />
        <MainContent activeTab={this.state.activeTab} />
      </div>
    );
  },
});

export default Application;
