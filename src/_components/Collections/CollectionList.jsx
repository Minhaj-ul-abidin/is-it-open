import React from "react";
import { RestaurantList } from "../Restaurants/RestaurantList";
function CollectionList({ collections }) {
  return (
    <ul>
      {collections.map((collection, index) => (
        <>
          <li key={collection._id}>{index + ". " + collection.name}</li>
          <RestaurantList restaurants={collection.restaurants} />
        </>
      ))}
    </ul>
  );
}

export { CollectionList };
