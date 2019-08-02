import merge from "lodash/merge";

import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 1,
  maxPrice: 500,
  minBeds: 1,
  maxBeds: 10,
  minBathrooms: 1,
  maxBathrooms: 10
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
