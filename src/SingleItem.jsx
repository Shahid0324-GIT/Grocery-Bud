import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItems }) => {
  // const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItems(item.id)}
      />
      <p
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          textTransform: "capitalize",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
