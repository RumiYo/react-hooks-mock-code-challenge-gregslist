import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemList, onDeleteItem, sortOn }) {

  let sortedItemList = itemList;

  if(sortOn){
    sortedItemList = itemList.sort((a,b) => {
      if(a.location < b.location){ return -1 }
      else if( a.location > b.location){ return 1 }
      else{ return 0 }
    })
  }else{
    sortedItemList = itemList.sort((a,b) => {
      if(a.id < b.id){ return -1 }
      else if( a.id > b.id){ return 1 }
      else{ return 0 }
    })
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {sortedItemList.map(item => {
            return ( <ListingCard item={item} key={item.id} onDeleteItem={onDeleteItem}/> )
          }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
