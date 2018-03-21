import React from 'react';
// store form fields in an array
import {Field, FieldArray, reduxForm} from 'redux-form';
import {required, nonEmpty, isTrimmed,length} from './validators.js'
import {sendNewRecipe,fetchRecipeData} from '../../actions/dashboard'
import {handleNewRecipeModal} from '../../actions/controls'
import Input from './Input.js'


const blurbLength = length({min:0, max:50})
export class EspressoRecipeForm extends React.Component {
    onSubmit(values) {
      console.log(values);
    const {steps, recipeName,blurb} = values;
    const newRecipe = {steps, recipeName, espressoType:'Ristretto',blurb}
    this.props.dispatch(handleNewRecipeModal());
      return this.props.dispatch(sendNewRecipe(newRecipe))
        .then(() => this.props.dispatch(fetchRecipeData()))
    }

  render(){

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} className="recipe-form-step-input" type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
    )
    const renderSteps = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button className="recipe-form-add-step"type="button" onClick={() => fields.push()}>
        Add Step
      </button>
    </li>
    {fields.map((step, index) => (
      <li key={index} className="recipe-form-step-container">
        <Field
          name={step}
          className="recipe-form-step-field"
          type="text"
          component={renderField}
          label={`Step #${index + 1}`}
        />
        <button
          className="recipe-form-remove-step"
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)
          }>X
        </button>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>)

    return(
      <form className="recipe-form"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
      )}>
          <Field component="input"
            type="text"
            name="recipeName"
            placeholder="Recipe Name"
            id="recipeName"
            className="recipe-name-input"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field component="input"
            type="text"
            name="espressoType"
            placeholder="Drink Type"
            spellCheck="true"
            default="Espresso"
            className="recipe-form-espresso-type-input"
            validate={[required,nonEmpty,isTrimmed]}
          />
          <FieldArray name="steps" component={renderSteps} />
          <Field component="input"
            type="textarea"
            name="blurb"
            id="recipeName"
            className="recipe-blurb"
            placeholder="Write about your recipe (50 char max)"
          />
          <button type="submit">Submit</button>
      </form>
  )}
}



export default reduxForm({
  form: 'espressoRecipeForm'
})(EspressoRecipeForm);

//
