import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantsActions } from "../_actions";

function HomePage() {
    const restaurants = useSelector((state) => state.restaurants);

    const user = useSelector(state => state.authentication.user);
    console.log({ user });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restaurantsActions.get());
    }, []);

    return (
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.name}!</h1>
        <br />
        <h3> List of Restaurants </h3>

        {restaurants.loading && <em>Loading restaurants...</em>}
        {restaurants.error && (
          <span className="text-danger">ERROR: {restaurants.error}</span>
        )}
        {restaurants.items && (
          <ul>
            {restaurants.items.map((restaurant, index) => (
              <li key={restaurant._id}>{index + ". " + restaurant.name}</li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
}

export { HomePage };