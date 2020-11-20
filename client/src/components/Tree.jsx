import React from 'react'; 
import FirTree_PNG from '../images/FirTree.png'; 
import { navigate } from "@reach/router"; 
import star2_PNG from '../images/star2.png'

const Tree = (props) => {
    const { children } = props; 
    console.log( children ); 

    const clickHandle =(id)=> {
        console.log(id); 
        navigate(`/child/${id}`); 
    }

    return (
        
        <div style={ treeStyle }>
            { children.map((child)=>{
                return (
                <div onClick={(e)=>{clickHandle(child._id)}} style={{
                    position: "absolute",
                    top: Math.floor((Math.random() * 400) + 100) + "px", 
                    left: Math.floor((Math.random() * 250) + 100) + "px",
                    cursor: "pointer"
                }}>
                    <img src={star2_PNG} alt= "star" style = {{height: "70px"}}></img>
                    <p style={{position:"absolute", top: "25px", left: "25px", fontSize: "8px", fontWeight: "bold"}}>{child.firstName}</p>
                    <p style={{position:"absolute", top: "35px", left: "22px", fontSize: "8px", fontWeight: "bold"}}>Age: {child.age}</p>
                </div>
                )                
            })}
        </div>
    )
}




const treeStyle = {
        width: "700px",
        height: "600px",
        left:"130px",
        margin: "1em auto",
        borderRadius:"100px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${FirTree_PNG})`,
        position:"relative",
        display: "inline-block", 
        verticalAlign: "top", 
}


export default Tree; 