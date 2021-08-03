import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restaurantsActions } from "../_actions";
import { RestaurantList } from "../_components";

function HomePage() {
  const restaurants = useSelector((state) => state.restaurants);

  const user = useSelector((state) => state.authentication.user);
  console.log({ user });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantsActions.get());
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Hi {user.name}!</h1>
      <p>
        <Link to="/login">Logout</Link>
      </p>
      <br />
      <h3> List of Restaurants </h3>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export { HomePage };
