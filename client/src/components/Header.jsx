import React from "react"; 
import { Link } from "@reach/router"; 

const Header = () =>{
    return(
        <div style={headerStyle}>
            <h1>Gifts Fir Kids</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/child/new">Nominate a Child</Link>
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