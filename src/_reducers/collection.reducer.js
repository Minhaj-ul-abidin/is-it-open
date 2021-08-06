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
    case collectionConstants.CREATE_REQUEST:
      return { ...state, creating: true };
    case collectionConstants.CREATE_SUCCESS:
      return {
        items: [action.collection, ...state.items],
      };
    case collectionConstants.CREATE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
