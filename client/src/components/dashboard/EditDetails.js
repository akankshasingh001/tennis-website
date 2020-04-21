import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EditAccount from './EditAccount';
import EditProfile from './EditProfile';

const EditDetails = () => {
  return (
    <div className="ui container">
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanel>
          <EditAccount />
        </TabPanel>
        <TabPanel>
          <EditProfile />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EditDetails;
