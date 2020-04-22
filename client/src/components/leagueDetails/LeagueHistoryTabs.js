import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class LeagueHistoryTabs extends Component {
  render() {
    return (
      <div className="ui container">
        <Tabs>
          <TabList>
            <Tab>Singles</Tab>
            <Tab>Doubles</Tab>
            <Tab>Mixed</Tab>
          </TabList>

          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default LeagueHistoryTabs;
