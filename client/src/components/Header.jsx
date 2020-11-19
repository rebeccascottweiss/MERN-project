import React from "react"; 
import { Link } from "@reach/router"; 


const Header = () =>{
    return(
        <div style={headerStyle}>
            <h1 style={{fontSize:"50px"}}>Gifts Fir Kids</h1>
            <div>
                <button style={{backgroundColor:"rgb(99,7,18)"}} >
                    <Link style={{ textDecoration:"none",color: "White"}} to="/">Home</Link>
                </button>
                    {"  |  "}
                <button style={{backgroundColor:"rgb(99,7,18)"}} >
                <Link style={{textDecoration:"none",color: "White"}} to="/child/new">Nominate a Child</Link>
                </button>
                {"  |  "}
                <button style={{backgroundColor:"rgb(99,7,18)"}} >
                <Link style={{textDecoration:"none",color: "White"}} to="/donate">Make a Monetary Donation</Link>
                </button>

            </div>  
        </div>
    )
}; 

const headerStyle = {
    background: "rgb(96,111,78)", 
    color: "white", 
    fontFamily:"'Mountains of Christmas', cursive",
    fontWeight: "400",
    display:"flex", 
    justifyContent: "space-between", 
    alignItems:"center", 
    padding:"1em 3em",
    width:"auto", 
    
};

export default Header; 