/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push as changeLocation } from 'react-router-redux';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { makeSelectAuthUser } from 'containers/App/selectors';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';

export class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <NavBar changeLocation={this.props.changeLocation} authUser={this.props.authUser} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={4} md={3} lg={2}>
            <SideBar
              changeLocation={this.props.changeLocation}
              authUser={this.props.authUser}
            />
          </Col>
          <Col xs={6} sm={8} md={9} lg={10}>
            <div style={{ paddingTop: 15 }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Layout.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authUser: makeSelectAuthUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeLocation: (location) => dispatch(changeLocation(location)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Layout);
