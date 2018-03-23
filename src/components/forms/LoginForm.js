import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../../actions/auth';
import {required, nonEmpty} from './validators';
import Input from './Input';
export class LoginForm extends React.Component{
  onSubmit(values){
    const {username,password} = values;
    return this.props.dispatch(login(username,password));
  }
  render(){
    let error;
        if (this.props.loginError) {
            error = (
                <div className="login-form-error" >
                    <span>Incorrect Username or Password</span>
                </div>
            );
        }
    return(
      <div className="login-form-container">
      <form className="login-form" onSubmit={this.props.handleSubmit(values => {
        this.onSubmit(values)
      })}>
        <label htmlFor="username">username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
          validateOn='submit'
        />
        <label htmlFor="password">password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required,nonEmpty]}
        />

        <button className="login-submit" disabled={this.props.pristine}>
          login
        </button>
        {error}

      </form>
    </div>
  )
  }
};

export default reduxForm({
  form:'login',
  onSubmitFail:(errors,dispatch) => dispatch(focus('login','username'))

})(LoginForm);
