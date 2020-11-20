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
                    top: Math.floor((Math.random() * 300) + 100) + "px", 
                    left: Math.floor((Math.random() * 200) + 100) + "px",
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

// const position = {
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