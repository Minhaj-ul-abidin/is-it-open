import { collectionConstants } from "../_constants";
import { collectionService } from "../_services";

export const collectionActions = {
  get,
  update,
  deleteColc,
};

function get() {
  return (dispatch) => {
    dispatch(request());

    collectionService.get().then(
      (collections) => dispatch(success(collections.data)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: collectionConstants.GET_REQUEST };
  }
  function success(collections) {
    return { type: collectionConstants.GET_SUCCESS, collections };
  }
  function failure(error) {
    return { type: collectionConstants.GET_FAILURE, error };
  }
}

function update() {}

function deleteColc() {}
