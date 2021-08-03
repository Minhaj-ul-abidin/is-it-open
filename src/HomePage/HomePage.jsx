import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantsActions } from "../_actions";

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    console.log({ user });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restaurantsActions.getAll());
    }, []);

    return (
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.name}!</h1>
        <p>You're logged in with React Hooks!!</p>
        <h3>All registered users:</h3>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
}

export { HomePage };