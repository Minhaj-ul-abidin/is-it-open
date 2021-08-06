import { collectionConstants } from "../_constants";
import { collectionService } from "../_services";
import { alertActions } from "./alert.actions";

export const collectionActions = {
  get,
  update,
  deleteColc,
  create,
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
function create(collection) {
  return (dispatch) => {
    dispatch(request());

    collectionService.create(collection).then(
      (collection) => {
        dispatch(success(collection.data));
        dispatch(alertActions.success("Collection Created Successfuly"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: collectionConstants.CREATE_REQUEST };
  }
  function success(collection) {
    return { type: collectionConstants.CREATE_SUCCESS, collection };
  }
  function failure(error) {
    return { type: collectionConstants.CREATE_FAILURE, error };
  }
}

function update() {}

function deleteColc() {}
