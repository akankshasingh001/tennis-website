import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <div className="ui container">
        <h1>
          <i className="exclamation triangle icon" /> Page Not Found
        </h1>
        <p className="large">Sorry, this page does not exist</p>
      </div>
    </Fragment>
  );
};

export default NotFound;
