import React from 'react';
// store form fields in an array
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, isTrimmed} from './validators.js'
import Input from './Input'

export class EspressoRecipeForm extends React.Component {


  render(){
    return(
      <form className="recipe-form"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
      )}>
          <label htmlFor="brewRatio">Brew Ratio</label>
          <Field component={Input}
            type="text"
            name="brewRatio"
            id="brewRatio"
            // validate={[required, nonEmpty, isTrimmed]}
          />

          <input type="text"></input>
      </form>
  )}
}


export default reduxForm({
  form: 'espressoRecipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('espressoRecipe', Object.keys(errors)[0]))
})(EspressoRecipeForm);
