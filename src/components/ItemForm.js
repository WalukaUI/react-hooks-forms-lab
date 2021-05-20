import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit}) {

  const [name,setName]=useState("")
  const [category,setnamecategory]=useState("Produce")

  function setItemname(e){
    setName(e.target.value)
  }

  function setcatName(e){
    setnamecategory(e.target.value)
  }

  function setObject(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category
    };
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={(e) => { setObject(e) }}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={setItemname}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={setcatName}>
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
