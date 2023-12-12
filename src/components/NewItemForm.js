import React, { useState } from "react";

function NewItemForm({ onAddItem }){

    const [ description, setDescription ] = useState("");
    const [ image, setImage ] = useState("");
    const [ location, setLocation ] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        const newItem = {
            description: description,
            image: image,
            location: location,
        }
        console.log(newItem);
        fetch("http://localhost:6001/listings",{
            method: "POST",
            headers: {
                "COntent-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .then ( r => r.json() )
        .then ( newItem => onAddItem (newItem) )
    }

    return (
        <div id="addItem">
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit} >
                <label>
                    Description: 
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </label><br/>
                <label>
                    Image: 
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} />
                </label><br/>
                <label>
                    Location: 
                    <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} />
                </label><br/>
                <button type="submit">Add to List</button>
            </form>
        </div>
    )
}

export default NewItemForm; 