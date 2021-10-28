import React from 'react'
import '../components-css/navbar.css'
const logoBackgroundColor = ()=>{
    setTimeout(()=>{
        document.querySelector('#logo').style.backgroundColor = "#485461d6"
        document.querySelector('#logo').style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px"
      },0)
    setTimeout(()=>{
        document.querySelector('#logo').style.backgroundColor = "#2a5470"
        document.querySelector('#logo').style.boxShadow = "none"
      },300)
      
}
console.log(document.querySelector('#logo'));
// document.querySelector('#logo').addEventListener('click', logoBackgroundColor)

export default function Navbar() {
   
    return (
        <>
            <div className="navbar">
                <div className="logo"><h1 id="logo" onClick={logoBackgroundColor}>SV</h1></div>
                <ul>
                    <li className="nav_items">Home</li>
                    <li className="nav_items">SortingVisualizer</li>
                    <li className="nav_items">About</li>
                    <li className="nav_items">Login</li>
                </ul>
            </div>
        </>
    )
}
