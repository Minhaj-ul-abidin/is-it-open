import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CollectionPage = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="col-lg-8 offset-lg-2">
      {user ? (
        <h2>Your list of collections</h2>
      ) : (
        <h1> Sign in to create collections </h1>
      )}
    </div>
  );
};

export { CollectionPage };
