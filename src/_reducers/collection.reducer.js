import { collectionConstants } from "../_constants";

export function collections(state = {}, action) {
  switch (action.type) {
    case collectionConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case collectionConstants.GET_SUCCESS:
      return {
        items: action.collections,
      };
    case collectionConstants.GET_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
