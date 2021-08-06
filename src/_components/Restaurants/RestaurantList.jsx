import React from "react";

const RestaurantList = ({ restaurants, addHandler }) => {
  return (
    <ul>
      {restaurants.map((restaurant, index) => (
        <li key={restaurant._id}>
          {index + ". " + restaurant.name}
          <p>{restaurant.raw_timings}</p>
          {addHandler && (
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
