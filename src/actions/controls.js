export const HANDLE_NEW_RECIPE_MODAL = 'HANDLE_NEW_RECIPE_MODAL'
export const handleNewRecipeModal = () => ({
  type:HANDLE_NEW_RECIPE_MODAL
})

export const HANDLE_VIEW_RECIPE_MODAL = 'HANDLE_VIEW_RECIPE_MODAL'
export const handleViewRecipeModal = recipeIndex => ({
  type:HANDLE_VIEW_RECIPE_MODAL,
  recipeIndex
})
