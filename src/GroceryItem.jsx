/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GroceryItem = ({ item, handleDelete }) => {
  return (
    <div className="list-item">
      <input type="checkbox" />
      <span>{item}</span>
      <button className="delete-btn" onClick={() => handleDelete(item)}>
        Delete
      </button>
    </div>
  );
};

export default GroceryItem;