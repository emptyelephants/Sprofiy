import{API_BASE_URL} from '../config.js';
import {normalizeResponseErrors} from './utils';

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
