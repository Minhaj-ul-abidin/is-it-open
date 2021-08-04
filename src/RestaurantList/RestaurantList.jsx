import React from "react";

const RestaurantList = ({ restaurants, addHandler }) => {
  return (
    <ul>
      {restaurants.map((restaurant, index) => (
        <li key={restaurant._id}>
          {index + ". " + restaurant.name}
          {restaurant.addingToCollection ? (
            <em> - Deleting...</em>
          ) : restaurant.addingToCollectionError ? (
            <span className="text-danger">
              {" "}
              - ERROR: {restaurant.deleteError}
            </span>
          ) : (
            <span>
              {" "}
              -{" "}
              <a
                onClick={() => addHandler(restaurant.name)}
                className="text-primary"
              >
                Add to Collections
              </a>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export { RestaurantList };
