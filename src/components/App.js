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

 function updateList(itemId){
    const newItemList = itemList.filter(item => item.id !== itemId )
    setItemList(newItemList.toLowerCase())
 }

 function filterList(word){
  const newItemList =itemList.filter( item => item.description.toLowerCase().includes(word) )
  setItemList(newItemList)
 }

  return (
    <div className="app">
      <Header filterList={filterList}/>
      <ListingsContainer itemList={itemList} updateList={updateList} />
    </div>
  );
}

export default App;
