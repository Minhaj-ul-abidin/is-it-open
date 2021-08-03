import { restaurantsConstants } from "../_constants";
import { restaurantsService } from "../_services";

export const restaurantsActions = {
  getAll,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    restaurantsService.getAll().then(
      (restaurants) => dispatch(success(restaurants)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: restaurantsConstants.GETALL_REQUEST };
  }
  function success(restaurants) {
    return { type: restaurantsConstants.GETALL_SUCCESS, restaurants };
  }
  function failure(error) {
    return { type: restaurantsConstants.GETALL_FAILURE, error };
  }
}
