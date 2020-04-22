import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchUser from '../../actions/searchUser';
import SearchUserList from './SearchUserList';

class SearchUser extends Component {
  // componentDidMount() {
  //   this.props.searchUser();
  // }

  state = { fname: '', lname: '' };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderList = () => {
    const values = this.props.search.user ? this.props.search.user : [];
    return (
      <div className="ui middle aligned list">
        {values.map(value => {
          return (
            <ul>
              <li class="ui left floated header">
                {value.firstName} {value.lastName}
              </li>
              <li class="ui right floated header">{value.city}</li>
            </ul>
          );
        })}
      </div>
    );
  };

  onFormSubmit = e => {
    e.preventDefault();
    const formData = { fname: this.state.fname, lname: this.state.lname };
    this.props.searchUser(formData);
    this.renderList();
  };
  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
          <h4 className="ui dividing header">Search Player</h4>
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={this.onInputChange}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <input type="submit" className="ui button primary" value="Search" />
        </form>

        <div>
          {/* {this.renderList()} */}
          <SearchUserList searchUserList={this.renderList()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchUser }
)(SearchUser);
