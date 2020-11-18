import React from 'react'; 
import Tree_PNG from '../images/Tree.png'; 
import { navigate } from "@reach/router"; 

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
                    top: Math.floor((Math.random() * 300) + 100) + "px", 
                    left: Math.floor((Math.random() * 200) + 100) + "px",
                }}>
                    <svg height="80" width="80">
                        <circle style={ ornamentStyle } />
                    </svg>
                    <p style={{position:"absolute", top: "-2px", left: "9px", fontSize: "9px", fontWeight: "bold"}}>{child.firstName}</p>
                    <p style={{position:"absolute", top: "8px", left: "6.5px", fontSize: "9px", fontWeight: "bold"}}>Age: {child.age}</p>
                </div>
                )                
            })}
        </div>
    )
}

const ornamentStyle = {
    cx: "20",
    cy: "20",
    r: "18",
    fill: "red",
    cursor: "pointer",
}

// const position = {
//     position: "absolute",
//     top: Math.floor((Math.random() * 300) + 100) + "px", 
//     left: Math.floor((Math.random() * 200) + 100) + "px", 
// }
// const position1 = {
//     position: "absolute",
//     top: "100px", 
//     left: "190px", 
// }
// const position2 = {
//     position: "absolute",
//     top: "200px", 
//     left: "210px", 
// }
// const position3 = {
//     position: "absolute",
//     top: "300px", 
//     left: "270px", 
// }
// const position4 = {
//     position: "absolute",
//     top: "400px", 
//     left: "220px", 
// }

const treeStyle = {
        width: "700px",
        height: "500px",
        margin: "1rem auto",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${FirTree_PNG})`,
        position:"relative",
}


export default Tree; 