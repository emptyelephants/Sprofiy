import{API_BASE_URL} from '../config.js';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
export const FETCH_RECIPE_DATA_SUCCESS = 'FETCH_RECIPE_DATA_SUCCESS'
export const fetchRecipeDataSucess = recipes => ({
  type:FETCH_RECIPE_DATA_SUCCESS,
  recipes
});

export const FETCH_RECIPE_DATA_LOADING = 'FETCH_RECIPE_DATA_LOADING'
export const fetchRecipeDataLoading = recipes => ({
  type:FETCH_RECIPE_DATA_LOADING
});

export const FETCH_RECIPE_DATA_ERROR ='FETCH_RECIPE_DATA_ERROR'
export const fetchRecipeDataError = (error) => ({
  type:FETCH_RECIPE_DATA_ERROR,
  error
});


export const sendNewRecipe = (newRecipeData) => dispatch => {
  console.log(newRecipeData,'from actions')
  return fetch(`${API_BASE_URL}/recipes`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newRecipeData)
  })
  .then((res) => normalizeResponseErrors(res))
  .then((res) => res.json())
  .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
}

export const fetchRecipeData = () => (dispatch, getState) => {
  dispatch(fetchRecipeDataLoading())
  return fetch(`${API_BASE_URL}/recipes`,{
    method: 'GET',
    headers:{
      //auth goes here
    }
  })
  .then((res) => normalizeResponseErrors(res))
  .then((res) => res.json())
  .then((recipes) => dispatch(fetchRecipeDataSucess(recipes)))
  .catch((err) => dispatch(fetchRecipeDataError(err)));
};
