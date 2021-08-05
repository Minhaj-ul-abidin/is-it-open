import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restaurantsActions } from "../_actions";
import { Restaurants } from "../Restaurants";

function HomePage() {
  const restaurants = useSelector((state) => state.restaurants);

  const user = useSelector((state) => state.authentication.user);
  console.log({ user });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantsActions.get());
  }, []);

  const addHandler = (restaurantId) => {
    
    console.log("Add Handler CLicked On Restraunt: " + restaurantId);
  };

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Hi {user ? user.name : "Guest"}!</h1>
      <h3> List of Restaurants </h3>
      <Restaurants restaurants={restaurants} addHandler={addHandler} />
    </div>
  );
}

export { HomePage };
