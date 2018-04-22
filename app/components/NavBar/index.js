/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Icon, Intent, Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, InputGroup, AnchorButton } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar fixedToTop className="pt-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Icon icon={IconNames.GRAPH} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} />
            {' '}
            <FormattedMessage {...messages.header} />
          </NavbarHeading>
          <NavbarDivider />
          <InputGroup leftIcon="search" placeholder="Type text to search..." />
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton icon="user" text="username" intent={Intent.SUCCESS} />
        </NavbarGroup>
      </Navbar>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;
