import React from "react";
import { RestaurantList } from "./RestaurantList";
function Restaurants({ restaurants, addHandler }) {
  return (
    <div>
      {restaurants.loading && <em>Loading restaurants...</em>}
      {restaurants.error && (
        <span className="text-danger">ERROR: {restaurants.error}</span>
      )}
      {restaurants.items && (
        <RestaurantList
          restaurants={restaurants.items}
          addHandler={addHandler}
        />
      )}
    </div>
  );
}

export { Restaurants };
