import React from "react"; 
import { Link } from "@reach/router"; 

const Header = () =>{
    return(
        <div style={headerStyle}>
            <h1>Gifts Fir Kids</h1>
            <div>
                <Link style={{color: "White"}} to="/">Home</Link>{"  |  "}
                <Link style={{color: "White"}} to="/child/new">Nominate a Child</Link>{"  |  "}
                <Link style={{color: "White"}} to="/donate">Make a Monetary Donation</Link>
            </div>  
        </div>
    )
}; 

const headerStyle = {
    background: "darkred", 
    color: "white", 
    display:"flex", 
    justifyContent: "space-between", 
    alignItems:"center", 
    padding:"1em 3em",
    width:"100%", 
    
};

export default Header; 