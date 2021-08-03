import React from "react";
function RestaurantList({ restaurants }) {
  return (
    <div>
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
    </div>
  );
}

export { RestaurantList };
