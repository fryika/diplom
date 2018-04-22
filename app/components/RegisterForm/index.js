/**
*
* RegisterForm
*
*/

/* eslint-disable no-nested-ternary */
import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, Card, Button, Intent, Spinner, Callout } from '@blueprintjs/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


class RegisterForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  onChangeLogin(e) {
    const { onChangeLogin } = this.props;
    const login = e.target.value;
    onChangeLogin(login);
  }
  onChangePassword(e) {
    const { onChangePassword } = this.props;
    const password = e.target.value;
    onChangePassword(password);
  }
  onChangeEmail(e) {
    const { onChangeEmail } = this.props;
    const email = e.target.value;
    onChangeEmail(email);
  }
  render() {
    const { password, onClickSubmit, isSubmitted, errorMessage } = this.props;
    const { login, loginIsChecked, loginIsFree } = this.props;
    const { email, emailIsChecked, emailIsFree } = this.props;

    const LOGIN_INTENT = loginIsChecked ? (loginIsFree ? Intent.SUCCESS : Intent.DANGER) : Intent.NONE;
    const EMAIL_INTENT = emailIsChecked ? (emailIsFree ? Intent.SUCCESS : Intent.DANGER) : Intent.NONE;
    const PASSWORD_INTENT = (password.length > 0 && password.length > 6) ? Intent.SUCCESS : password.length > 0 ? Intent.DANGER : Intent.NONE;

    return (
      <Card>
        <FormGroup
          label={<FormattedMessage {...messages.login} />}
          helperText={<FormattedMessage {...messages.loginHelper} />}
          requiredLabel
        >
          <InputGroup disabled={isSubmitted} intent={LOGIN_INTENT} leftIcon="user" onChange={this.onChangeLogin} value={login} />
        </FormGroup>

        <FormGroup
          label={<FormattedMessage {...messages.email} />}
          helperText={<FormattedMessage {...messages.emailHelper} />}
          requiredLabel
        >
          <InputGroup disabled={isSubmitted} intent={EMAIL_INTENT} leftIcon="envelope" type="email" onChange={this.onChangeEmail} value={email} />
        </FormGroup>

        <FormGroup
          label={<FormattedMessage {...messages.password} />}
          helperText={<FormattedMessage {...messages.passwordHelper} />}
          requiredLabel
        >
          <InputGroup disabled={isSubmitted} intent={PASSWORD_INTENT} leftIcon="key" type="password" onChange={this.onChangePassword} value={password} />
        </FormGroup>
        {errorMessage && (
          <div style={{ marginBottom: 15 }}><Callout intent={Intent.DANGER}>{errorMessage}</Callout></div>
        )}
        <Button onClick={onClickSubmit} disabled={isSubmitted} icon={isSubmitted ? <Spinner intent={Intent.SUCCESS} small /> : 'tick'} intent={Intent.PRIMARY} text={<FormattedMessage {...messages.submit} />} />
      </Card>
    );
  }
}

RegisterForm.propTypes = {
  onChangeLogin: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,

  login: PropTypes.string.isRequired,
  loginIsChecked: PropTypes.bool.isRequired,
  loginIsFree: PropTypes.bool.isRequired,

  email: PropTypes.string.isRequired,
  emailIsChecked: PropTypes.bool.isRequired,
  emailIsFree: PropTypes.bool.isRequired,

  password: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default RegisterForm;
