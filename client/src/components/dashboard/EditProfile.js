import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, editUserProfile } from '../../actions/editProfile';
import CreateForm from './CreateForm';

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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const profile = {};
    profile.yearsPlayed = formData.yearsPlayedform;
    profile.profession = formData.professionform;
    profile.interests = formData.interestsform;
    profile.favPro = formData.favProform;
    profile.contactNumber = formData.contactNumberform;
    editUserProfile(profile);
  };

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  return !profile ? (
    <CreateForm />
  ) : (
    <Fragment>
      <div className="ui container">
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
          <input
            type="submit"
            className="ui button primary"
            value="Update Profile"
          />
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getUserProfile, editUserProfile }
)(EditProfile);
