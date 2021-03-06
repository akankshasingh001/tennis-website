import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import getCurrentUserDashboard from '../../actions/userDashboard';
import Spinner from '../layout/Spinner';
import RegisterCard from './RegisterCard';
import LeagueHistoryTabs from '../leagueDetails/LeagueHistoryTabs';

const UserDashboard = ({
  getCurrentUserDashboard,
  user: { user },
  loading
}) => {
  useEffect(() => {
    getCurrentUserDashboard();
  }, [getCurrentUserDashboard]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="ui container">
        <div className="ui grid">
          <div className="left floated five wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui small image" style={{ width: '100%' }}>
                  <img
                    src="https://img.favpng.com/13/22/9/tennis-cartoon-play-stock-illustration-png-favpng-H5T2rJXTeJGvx8Gt8fcQt5LfB.jpg"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <div className="header">
                    <span> {user && user.firstName}</span>{' '}
                    <span>{user && user.lastName}</span>
                  </div>
                  <div className="meta">
                    <span className="date">City : {user && user.city}</span>
                    <br />
                    <span className="date">Gender : {user && user.gender}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right floated five wide column">
            <RegisterCard />
          </div>
        </div>
        <div>
          <LeagueHistoryTabs />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentUserDashboard }
)(UserDashboard);
