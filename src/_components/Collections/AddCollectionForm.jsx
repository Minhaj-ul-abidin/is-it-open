import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectionActions } from "../../_actions";

function AddCollectionForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    dispatch(collectionActions.create({ name }));
    setName("");
    e.preventDefault();
  };
  return (
    <div className="row mx-auto my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name of Collection"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export { AddCollectionForm };
