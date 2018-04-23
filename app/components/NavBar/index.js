/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, Intent, Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, InputGroup, AnchorButton } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeLocationToProfile = this.changeLocationToProfile.bind(this);

    this.changeLocationToHome = this.changeLocation.bind(null, '/');
    this.changeLocationToLogin = this.changeLocation.bind(null, '/login');
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
      <Navbar className="pt-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading onClick={this.changeLocationToHome}>
            <Icon icon={IconNames.GRAPH} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} />
            {' '}
            <FormattedMessage {...messages.header} />
          </NavbarHeading>
          <NavbarDivider />
          <InputGroup leftIcon="search" placeholder="Type text to search..." />
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          {this.props.authUser && (
            <AnchorButton icon="user" onClick={this.changeLocationToProfile} text={this.props.authUser.get('login')} intent={Intent.SUCCESS} />
          )}
          {!this.props.authUser && (
            <AnchorButton icon="log-in" onClick={this.changeLocationToLogin} text={<FormattedMessage {...messages.login} />} intent={Intent.PRIMARY} />
          )}
        </NavbarGroup>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  authUser: PropTypes.object,
  changeLocation: PropTypes.func.isRequired,
};

export default NavBar;
