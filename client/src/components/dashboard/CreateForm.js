import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/createProfile';

const CreateForm = ({ createProfile }) => {
  const [profileForm, setProfileForm] = useState({
    yearsPlayed: '',
    profession: '',
    interests: '',
    favPro: '',
    contactNumber: ''
  });
  const {
    yearsPlayed,
    profession,
    interests,
    favPro,
    contactNumber
  } = profileForm;

  const onInputChange = e => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    createProfile(profileForm);
  };

  // useEffect(() => {
  //   const runEffect = async () => {
  //     //const data = await createProfile();
  //     await setProfileForm(profileForm);
  //   };
  //   runEffect();
  // }, [setProfileForm]);
  return (
    <div>
      <div className="ui container">
        <form className="ui form" onSubmit={onFormSubmit}>
          <h1 className="ui dividing header">Edit Profile</h1>
          <div className="two fields">
            <div className="field">
              <label>Years Played</label>
              <input
                type="text"
                placeholder="Years Played"
                name="yearsPlayed"
                value={yearsPlayed}
                onChange={onInputChange}
              />
            </div>
            <div className="field">
              <label>Profession</label>
              <input
                type="text"
                placeholder="Profession"
                name="profession"
                value={profession}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Interests</label>
              <input
                type="text"
                placeholder="Interests"
                name="interests"
                value={interests}
                onChange={onInputChange}
              />
            </div>
            <div className="field">
              <label>Favrouite Pro</label>
              <input
                type="text"
                placeholder="Favrouite Pro"
                name="favPro"
                value={favPro}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="Contact Number"
                name="contactNumber"
                value={contactNumber}
                onChange={onInputChange}
              />
            </div>
          </div>

          <input
            type="submit"
            className="ui button primary"
            value=" Create Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateForm));
