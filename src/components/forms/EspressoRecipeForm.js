import React from 'react';
// store form fields in an array
import {Field, FieldArray, reduxForm} from 'redux-form';
import {required, nonEmpty, isTrimmed} from './validators.js'
import {sendNewRecipe,fetchRecipeData} from '../../actions/recipes'
import {handleNewRecipeModal} from '../../actions/controls'

export class EspressoRecipeForm extends React.Component {
    onSubmit(values) {
    const {steps, recipeName} = values;
    const newRecipe = {steps, recipeName, brewMethod:'semi-auto espresso machine'}
    this.props.dispatch(handleNewRecipeModal());
      return this.props.dispatch(sendNewRecipe(newRecipe))
        .then(() => this.props.dispatch(fetchRecipeData()))
    }

  render(){

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
    )
    const renderSteps = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Step
      </button>
    </li>
    {fields.map((step, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)
          }>Delete Step
        </button>
        <Field
          name={step}
          type="text"
          component={renderField}
          label={`Step #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>)

    return(
      <form className="recipe-form"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
      )}>
          <label htmlFor="brewRatio">Recipe Name</label>
          <Field component="input"
            type="text"
            name="recipeName"
            id="recipeName"
            className="recipe-name-input"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <FieldArray name="steps" component={renderSteps} />
          <label htmlFor="steps">Steps </label>
          <button type="submit"> submit ( move me ) </button>
      </form>
  )}
}



export default reduxForm({
  form: 'espressoRecipeForm'
})(EspressoRecipeForm);

//
