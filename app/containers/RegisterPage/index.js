/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push as changeLocation } from 'react-router-redux';
import { makeSelectAuthUser } from 'containers/App/selectors';
import RegisterForm from 'components/RegisterForm/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeLogin, changePassword, changeEmail, submit } from './actions';

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if (this.props.authUser) {
      this.props.dispatch(changeLocation('/'));
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>RegisterPage</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <RegisterForm
          login={this.props.registerPage.login}
          loginIsChecked={this.props.registerPage.loginIsChecked}
          loginIsFree={this.props.registerPage.loginIsFree}

          email={this.props.registerPage.email}
          emailIsChecked={this.props.registerPage.emailIsChecked}
          emailIsFree={this.props.registerPage.emailIsFree}

          password={this.props.registerPage.password}
          errorMessage={this.props.registerPage.errorMessage}
          isSubmitted={this.props.registerPage.isSubmitted}
          onChangeLogin={this.props.onChangeLogin}
          onChangePassword={this.props.onChangePassword}
          onChangeEmail={this.props.onChangeEmail}
          onClickSubmit={this.props.onClickSubmit}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  registerPage: PropTypes.object.isRequired,
  authUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
  authUser: makeSelectAuthUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeLogin: (value) => dispatch(changeLogin(value)),
    onChangePassword: (value) => dispatch(changePassword(value)),
    onChangeEmail: (value) => dispatch(changeEmail(value)),
    onClickSubmit: () => dispatch(submit()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
