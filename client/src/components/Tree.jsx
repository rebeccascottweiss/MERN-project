import React from 'react'; 
import FirTree_PNG from '../images/FirTree.png'; 
import { navigate } from "@reach/router"; 
import star_PNG from '../images/star.png'

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
                    {/* <div style = {ornamentStyle}/> */}
                    <img src={star_PNG} alt= "star" style = {{height: "50px"}}></img>
                    {/* <svg height="80" width="80">
                        <circle style={ ornamentStyle } />
                    </svg> */}
                    <p style={{position:"absolute", top: "16px", left: "12px", fontSize: "8px", fontWeight: "bold"}}>{child.firstName}</p>
                    <p style={{position:"absolute", top: "26px", left: "12px", fontSize: "8px", fontWeight: "bold"}}>Age: {child.age}</p>
                </div>
                )                
            })}
        </div>
    )
}

const ornamentStyle = {
    // cx: "20",
    // cy: "20",
    // r: "18",
    // fill: "red",
    // cursor: "pointer",

    width: "40px",
    height: "40px",
    background: "red",
    borderRadius: "50%",

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
        left:"130px",
        margin: "1rem auto",
        borderRadius:"100px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${FirTree_PNG})`,
        position:"relative",
}


export default Tree; 