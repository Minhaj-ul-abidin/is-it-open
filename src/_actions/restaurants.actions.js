import { restaurantsConstants } from "../_constants";
import { restaurantsService } from "../_services";

export const restaurantsActions = {
  get,
  filter
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
    return { type: restaurantsConstants.GET_REQUEST };
  }
  function success(restaurants) {
    return { type: restaurantsConstants.GET_SUCCESS, restaurants };
  }
  function failure(error) {
    return { type: restaurantsConstants.GET_FAILURE, error };
  }
}


function filter({name, weekday , hour}) { 
    return (dispatch) => {
        dispatch(request())
    }
    function request() {
        return { type: restaurantsConstants.GET_REQUEST };
      }
      function success(restaurants) {
        return { type: restaurantsConstants.GET_SUCCESS, restaurants };
      }
      function failure(error) {
        return { type: restaurantsConstants.GET_FAILURE, error };
      }

} 
