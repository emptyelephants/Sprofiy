import{API_BASE_URL} from '../config.js';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const DECREMENT_PAGE = 'DECREMENT_PAGE'
export const decrementPage = () => ({
  type:DECREMENT_PAGE
})
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const incrementPage = () => ({
  type:INCREMENT_PAGE
})


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


export const sendNewRecipe = (newRecipeData) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/recipes`,{
    method:'POST',
    headers:{
      'content-type':'application/json',
      Authorization:`Bearer ${authToken}`
    },
    body:JSON.stringify(newRecipeData)
  })
  .then((res) => normalizeResponseErrors(res))
  .then((res) => res.json())
  // .then(() => dispatch)
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
  const authToken = getState().auth.authToken;
  dispatch(fetchRecipeDataLoading())
  return fetch(`${API_BASE_URL}/recipes`,{
    method: 'GET',
    headers:{
      Authorization:`Bearer ${authToken}`
    },
  })
  .then((res) => normalizeResponseErrors(res))
  .then((res) => res.json())
  .then((recipes) => dispatch(fetchRecipeDataSucess(recipes)))
  .catch((err) => dispatch(fetchRecipeDataError(err)));
};

// body: JSON.stringify({
  //   firstParam: 'yourValue',
  //   secondParam: 'yourOtherValue',
  // }),
