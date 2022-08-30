import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //    1) need to use useState variable "selectedCategory" and use a setter
  //       function for that variable "setSelectedCategory" AKA(array destructuring)
  const [selectedCategory, setSelectedCategory] = useState('All')

  //    2) create an event listener so you can manipulate the DOM 
  //       so that the selectedCategory will display when clicked
  function handleFilter(e){
    setSelectedCategory(e.target.value)
  }

  //    3) last deliverable wants us to "filter the array of items
  //       based on the selectedCatrgory"
  const selectedList = items.filter((item)=>{
    if(selectedCategory === "All"){
      return items
    } else {
      return item.category === selectedCategory
      }
  })

  return (
  //    4) onChange = an event listener that will listen for when an input field 
  //       has changed
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;