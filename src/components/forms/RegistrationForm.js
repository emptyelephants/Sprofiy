import React from 'react'
import '../styles/registrationForm.css';
import {Field, reduxForm, focus} from 'redux-form'
import {required, nonEmpty, matches, length} from './validators'
import {registerUser} from '../../actions/users.js'
import Input from './Input.js';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');




export class RegistrationForm extends React.Component{
  onSubmit(values){
    const {username, password} = values;
    const user = {username,password};
    return this.props.dispatch(registerUser(user));
  }

  render(){
        return(
        <form id="user-registration"
          onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
          {/* <label htmlFor="username">Username</label> */}
          <Field component={Input}
            id="username"
            name="username"
            // label="username"
            placeholder="username"
            validate={[required,nonEmpty]}/>
          <Field component={Input}
            id="password"
            type="password"
            name="password"
            // label="password"
            placeholder="password"
            validate={[required,nonEmpty,passwordLength]}
            validateOn="submit"/>
          <Field component={Input}
            id="password-confirm"
            type="password"
            name="password-confirm"
            // label="confirm-password"
            placeholder="confirm password"
            validate={[required,nonEmpty,matchesPassword]}
            validateOn="submit"
          />
            <button type="submit"
                disabled={this.props.pristine || this.props.submitting}
            >
            Submit</button>
        </form>
    );
  }
}


export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
