import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../actions/auth';
import {required, nonEmpty} from './validators';
import Input from './Input';
export class LoginForm extends React.Component{
  onSubmit(values){
    console.log(values)
    console.log('logging in !');
    const {username,password} = values;
    return this.props.dispatch(login(username,password));
  }
  render(){
    return(
      <div>
      <form className="login-form" onSubmit={this.props.handleSubmit(values => {
        this.onSubmit(values)
      })}>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required,nonEmpty]}
        />
        <button className="login-submit">button</button>

      </form>
    </div>
  )
  }
};

export default reduxForm({
  form:'loginForm'

})(LoginForm);
