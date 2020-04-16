import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, editUserProfile } from '../../actions/editProfile';
import Spinner from '../layout/Spinner';

const EditProfile = ({
  getUserProfile,
  editUserProfile,
  profile: { profile }
}) => {
  const { yearsPlayed, profession, interests, favPro, contactNumber } = profile;
  const [formData, setFormData] = useState({
    yearsPlayedform: yearsPlayed,
    professionform: profession,
    interestsform: interests,
    favProform: favPro,
    contactNumberform: contactNumber
  });

  const {
    yearsPlayedform,
    professionform,
    interestsform,
    favProform,
    contactNumberform
  } = formData;

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile, editUserProfile]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    //console.log(formData);
    editUserProfile(formData);
  };

  return profile === '' ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="ui container">
        {profile !== '' ? (
          <form className="ui form" onSubmit={e => onSubmit(e)}>
            <h1 className="ui dividing header">Edit Profile</h1>
            <div className="two fields">
              <div className="field">
                <label>Years Played</label>
                <input
                  type="text"
                  placeholder="Years Played"
                  name="yearsPlayedform"
                  value={yearsPlayedform}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="field">
                <label>Profession</label>
                <input
                  type="text"
                  placeholder="Profession"
                  name="professionform"
                  value={professionform}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Interests</label>
                <input
                  type="text"
                  placeholder="Interests"
                  name="interestsform"
                  value={interestsform}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="field">
                <label>Favrouite Pro</label>
                <input
                  type="text"
                  placeholder="Favrouite Pro"
                  name="favProform"
                  value={favProform}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Contact Number</label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactNumberform"
                  value={contactNumberform}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>

            <div className="ui button primary" tabIndex="0">
              Update Profile
            </div>
          </form>
        ) : (
          <div>
            {' '}
            <Spinner />
          </div>
        )}
      </div>
    </Fragment>
  );
  // );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getUserProfile, editUserProfile }
)(EditProfile);
