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

    restaurantsService.get().then(
      (restaurants) => dispatch(success(restaurants.data)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: collectionConstants.GET_REQUEST };
  }
  function success(restaurants) {
    return { type: collectionConstants.GET_SUCCESS, restaurants };
  }
  function failure(error) {
    return { type: collectionConstants.GET_FAILURE, error };
  }
}

function update() {}

function deleteColc() {}
