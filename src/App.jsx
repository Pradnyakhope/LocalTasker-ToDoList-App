/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Alert from "./Alert";
import GroceryItem from "./GroceryItem";
import "./styles.css";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName) {
      setGroceryList([...groceryList, itemName]);
      setAlert({ show: true, message: "Item Added To The List", type: "success" });
      setItemName("");
    } else {
      setAlert({ show: true, message: "Please Enter a Valid Item", type: "error" });
    }

    // Hide alert after 2 seconds
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleDelete = (itemToDelete) => {
    setGroceryList(groceryList.filter((item) => item !== itemToDelete));
    setAlert({ show: true, message: "Item Removed", type: "error" });

    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  return (
    <div className="container">
      {alert.show && <Alert type={alert.type} message={alert.message} />}
      <h1>Grocery Bud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter an item"
        />
        <button type="submit">Add Item</button>
      </form>
      <div id="list-container">
        {groceryList.map((item, index) => (
          <GroceryItem key={index} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
