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

    this.changeLocationToHome = this.changeLocation.bind(null, '/');
    this.changeLocationToLogin = this.changeLocation.bind(null, '/login');
    this.changeLocationToRegister = this.changeLocation.bind(null, '/register');
  }
  changeLocation(to) {
    this.props.changeLocation(to);
  }
  render() {
    return (
      <Menu>
        <MenuDivider title={<FormattedMessage {...messages.generalSection} />} />
        <MenuItem onClick={this.changeLocationToHome} icon="home" text={<FormattedMessage {...messages.home} />} />

        <MenuDivider title={<FormattedMessage {...messages.authSection} />} />
        <MenuItem onClick={this.changeLocationToLogin} icon="log-in" text={<FormattedMessage {...messages.login} />} />
        <MenuItem onClick={this.changeLocationToRegister} icon="new-object" text={<FormattedMessage {...messages.register} />} />
      </Menu>
    );
  }
}

SideBar.propTypes = {
  changeLocation: PropTypes.func.isRequired,
};

export default SideBar;
