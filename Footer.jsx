import React from "react";
import ReactDOM from "react-dom";

const date= new Date().getFullYear();

function Footer () {
    return (
        <footer> <p>Copyright {date}</p></footer>
       
    )
}

export default Footer;