import React from "react";
import ReactDOM from "react-dom";

function Note(){
    return(
        <div className="note">
            <h1>This is the Title</h1>
            <p contenteditable="true">This is the Content</p>
        </div>
    )
}

export default Note;