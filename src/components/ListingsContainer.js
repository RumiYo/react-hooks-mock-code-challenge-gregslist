import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemList, onDeleteItem }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {itemList.map(item => {
            return ( <ListingCard item={item} key={item.id} onDeleteItem={onDeleteItem}/> )
          }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
