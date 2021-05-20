import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchItem,setSearch]=useState("")
  const [array,setArry]=useState(items)


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const searchresult=(a)=>{
    setSearch(a.target.value)
  }
  function onFormSubmit(e){
    console.log(e);
    setArry([...array,e])
  }
   
  const itemsToDisplay =array.filter((item) => {
    if(item.name.includes(searchItem))
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory&&(item.name.includes(searchItem))
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onFormSubmit} array={array} setArry={setArry}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={searchresult} search={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
