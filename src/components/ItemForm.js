import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setItemName] = useState("");
  const [category, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name}
          onChange={(e) => setItemName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" 
        value={category}
        onChange={(e) => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
