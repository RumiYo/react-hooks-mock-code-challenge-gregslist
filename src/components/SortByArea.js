import React from "react";

function SortByArea({ sortOn, updateSort }){

    function sortClick(){
        updateSort();
    }
    const buttonNote = sortOn? "ON" : "OFF"

    return ( <button onClick={sortClick}>{buttonNote}</button> )
}

export default SortByArea;