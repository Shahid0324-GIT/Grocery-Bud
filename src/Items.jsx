import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItems }) => {
  //   console.log(items);
  return (
    <div className="items">
      <h4>Items List:</h4>
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            removeItem={removeItem}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
};

export default Items;
