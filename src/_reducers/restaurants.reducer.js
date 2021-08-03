import { restaurantsConstants } from "../_constants";

export function restaurants(state = {}, action) {
  switch (action.type) {
    case restaurantsConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case restaurantsConstants.GETALL_SUCCESS:
      return {
        items: action.restaurants,
      };
    case restaurantsConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
