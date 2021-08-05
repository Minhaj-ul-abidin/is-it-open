import React, { useEffect } from "react";
import { CollectionList } from "./CollectionList";
import { useDispatch, useSelector } from "react-redux";
import { collectionActions } from "../../_actions";
function Collections() {
  const user = useSelector((state) => state.authentication.user);

  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(collectionActions.get());
  }, []);

  return (
    <div>
      {collections.loading && <em>Loading collections...</em>}
      {collections.error && (
        <span className="text-danger">ERROR: {collections.error}</span>
      )}
      {collections.items && (
        <CollectionList
          collections={collections.items}
          //   delete={delete}cddcdcdcdcfffddffddcdcdcdc
        />
      )}
    </div>
  );
}

export { Collections };
