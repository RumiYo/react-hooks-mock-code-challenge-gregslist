import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {

  const {image, description, location, id} = item; 
  const [ favOn, setFavOn ] = useState(false)

  function favButtonClick(event){
    setFavOn(!favOn);
  }

  function deleteButton(e){
    console.log(parseInt(e.target.id))
    // updateList(parseInt(e.target.id))
    fetch(`http://localhost:6001/listings/${e.target.id}`,{
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteItem(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favOn ? (
          <button className="emoji-button favorite active" onClick={favButtonClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favButtonClick} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id={id} onClick={deleteButton} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
