import { restaurantsConstants } from "../_constants";

export function restaurants(state = {}, action) {
  switch (action.type) {
    case restaurantsConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case restaurantsConstants.GET_SUCCESS:
      return {
        items: action.restaurants,
      };
    case restaurantsConstants.GET_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
