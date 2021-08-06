import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collections,AddCollectionForm } from "../_components";

const CollectionPage = () => {
  const user = useSelector((state) => state.authentication.user);
  const [showForm, setShowForm] = useState(false);
  
  const handleCreate = ({id,name}) => {
    console.log({id,name});
  }
  return (
    <div className="col-lg-8 offset-lg-2">
      {user && ( 
        <>
      <button className="btn btn-primary" onClick={()=> setShowForm(!showForm)}>{showForm? "Cancel": "Create Collection"}</button>
        {
          showForm && <AddCollectionForm  />
        }

        </>
      )}
      
      {user ? (
        <>
        <h2>Your list of collections</h2>
        <Collections />
        </>
      ) : (
        <h2> Login in to create collections </h2>
      )}
     

    </div>
  );
};

export { CollectionPage };
