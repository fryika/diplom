/**
*
* SideBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SideBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeLocationToProfile = this.changeLocationToProfile.bind(this);

    this.changeLocationToHome = this.changeLocation.bind(null, '/');
    this.changeLocationToLogin = this.changeLocation.bind(null, '/login');
    this.changeLocationToRegister = this.changeLocation.bind(null, '/register');
    this.changeLocationToSettings = this.changeLocation.bind(null, '/settings');
  }
  changeLocation(to) {
    this.props.changeLocation(to);
  }
  changeLocationToProfile() {
    const { authUser } = this.props;
    this.changeLocation(`/user/${authUser.get('login')}`);
  }
  render() {
    return (
      <Menu>
        <MenuDivider title={<FormattedMessage {...messages.generalSection} />} />
        <MenuItem onClick={this.changeLocationToHome} icon="home" text={<FormattedMessage {...messages.home} />} />

        {!this.props.authUser && (
          <React.Fragment>
            <MenuDivider title={<FormattedMessage {...messages.authSection} />} />
            <MenuItem onClick={this.changeLocationToLogin} icon="log-in" text={<FormattedMessage {...messages.login} />} />
            <MenuItem onClick={this.changeLocationToRegister} icon="new-object" text={<FormattedMessage {...messages.register} />} />
          </React.Fragment>
        )}
        {this.props.authUser && (
          <React.Fragment>
            <MenuDivider title={<FormattedMessage {...messages.userSection} />} />
            <MenuItem onClick={this.changeLocationToProfile} icon="user" text={this.props.authUser.get('login')} />
            <MenuItem onClick={this.changeLocationToSettings} icon="cog" text={<FormattedMessage {...messages.settings} />} />
          </React.Fragment>
        )}
      </Menu>
    );
  }
}

SideBar.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};

export default SideBar;
