import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import uuid from 'react-uuid'

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filSearch, setFilSearch]=useState('')

  function handleSearch(event){

    setFilSearch(event.target.value)
}

const [itemName, setFoodName]=useState('')

const [itemCategory, setFoodCategory]=useState('Produce')

const newItem={
  id:uuid(),
  name:itemName,
  category:itemCategory
}

function handleFoodName(event){
  setFoodName(event.target.value)

}
function handleFoodCategory(event){
  setFoodCategory(event.target.value)

}
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  ;

  }
const [items2, setItems2]=useState(items)


 function handleSubmit(event){

event.preventDefault()
   setItems2([...items2,newItem])

   
  }

  const itemsToDisplay = items2.filter((item) => {
  if (item.name.includes(filSearch))
  return true
 
  });

  return (
    <div className="ShoppingList">
      <ItemForm name={itemName}
      category={itemCategory}
      changeCategory={handleFoodCategory}
      changeName={handleFoodName}
      onItemFormSubmit={handleSubmit}
       />
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearch}
      search={filSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
