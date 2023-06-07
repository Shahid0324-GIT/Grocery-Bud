import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItems }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newItemName);

    if (!newItemName) {
      toast.error("Please insert any item name");
      return;
    }

    addItems(newItemName);
    setNewItemName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Add item"
            id="item"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
