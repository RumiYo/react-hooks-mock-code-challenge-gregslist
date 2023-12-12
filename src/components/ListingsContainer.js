import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemList, updateList }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {itemList.map(item => {
            return ( <ListingCard description={item.description} image={item.image} location={item.location} id={item.id} key={item.id} updateList={updateList}/> )
          }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
