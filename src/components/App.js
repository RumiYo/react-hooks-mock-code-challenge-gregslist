import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ itemList, setItemList ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data =>setItemList(data))
  },[])

 function onDeleteItem(deletedItem){
    const newItemList = itemList.filter(item => item.id !== deletedItem.id )
    setItemList(newItemList)
 }

 function filterList(word){
  const newItemList =itemList.filter( item => item.description.toLowerCase().includes(word) )
  setItemList(newItemList)
 }

  return (
    <div className="app">
      <Header filterList={filterList}/>
      <ListingsContainer itemList={itemList} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
