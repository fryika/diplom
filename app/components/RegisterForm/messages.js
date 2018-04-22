/*
 * RegisterForm Messages
 *
 * This contains all the text for the RegisterForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  login: {
    id: 'app.components.RegisterForm.login',
    defaultMessage: 'Login: ',
  },
  loginHelper: {
    id: 'app.components.RegisterForm.loginHelper',
    defaultMessage: 'This value will be your nickname on the site',
  },
  password: {
    id: 'app.components.RegisterForm.password',
    defaultMessage: 'Password: ',
  },
  passwordHelper: {
    id: 'app.components.RegisterForm.passwordHelper',
    defaultMessage: 'Very secret value!',
  },
  email: {
    id: 'app.components.RegisterForm.email',
    defaultMessage: 'Email: ',
  },
  emailHelper: {
    id: 'app.components.RegisterForm.emailHelper',
    defaultMessage: 'We will drop you of letters! :devil:',
  },
  submit: {
    id: 'app.components.RegisterForm.submit',
    defaultMessage: 'Register & Log-in',
  },
});
