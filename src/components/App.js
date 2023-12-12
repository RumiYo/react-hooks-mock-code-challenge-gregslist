import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewItemForm from "./NewItemForm";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ originalItemList, setOriginalItemList ] = useState([]);
  const [ itemList, setItemList ] = useState([]);
  const [ sortOn, setSortOn ] =useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => {
      setOriginalItemList(data)
      setItemList(data)
    })
  },[])


 function onDeleteItem(deletedItem){
    const newItemList = itemList.filter(item => item.id !== deletedItem.id )
    setItemList(newItemList)
 }

 function filterList(word){
    const newItemList =originalItemList.filter( item => item.description.toLowerCase().includes(word) )
    setItemList(newItemList)
 }

 function updateSort(){
  setSortOn(!sortOn);
 }

 function onAddItem(item){
  const newItemList= [...itemList, item ]
  setItemList(newItemList);
 }

  return (
    <div className="app">
      <Header filterList={filterList} sortOn={sortOn} updateSort={updateSort} />
      <NewItemForm onAddItem={onAddItem} />
      <ListingsContainer itemList={itemList} onDeleteItem={onDeleteItem} sortOn={sortOn} />
    </div>
  );
}

export default App;
