import * as SuggestionsApiUtil from "../util/suggestions_api_util";

export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";


export const receiveSuggestions = suggestions => ({
  type: RECEIVE_SUGGESTIONS,
  suggestions
});

export const fetchSuggestions = () => dispatch =>
  SuggestionsApiUtil.fetchSuggestions().then(suggestions =>
    dispatch(receiveSuggestions(suggestions))
  );

