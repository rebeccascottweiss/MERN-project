import React from 'react'; 
import Tree_PNG from '../images/Tree.png'; 

const Tree = () => {
    const clickHandle =()=> {
        console.log('put some animation in here.')
    }
    return (
        <div style={ treeStyle }>
            <div onClick={clickHandle} style={ position1 }>
                <svg height="100" width="100">
                    <circle style={ ornamentStyle } />
                </svg>
            </div>
            <div onClick={clickHandle} style={ position2 }>
                <svg height="100" width="100">
                    <circle style={ ornamentStyle } />
                </svg>
            </div>
            <div onClick={clickHandle} style={ position3 }>
                <svg height="100" width="100">
                    <circle style={ ornamentStyle } />
                </svg>
            </div>
            <div onClick={clickHandle} style={ position4 }>
                <svg height="100" width="100">
                    <circle style={ ornamentStyle } />
                </svg>
            </div>
        </div>
    )
}

const ornamentStyle = {
    cx: "20",
    cy: "20",
    r: "10",
    fill: "red",
    cursor: "pointer",
}

const position1 = {
    position: "fixed",
    top: "100px", 
    left: "310px", 
}
const position2 = {
    position: "fixed",
    top: "200px", 
    left: "410px", 
}
const position3 = {
    position: "fixed",
    top: "300px", 
    left: "370px", 
}
const position4 = {
    position: "fixed",
    top: "400px", 
    left: "320px", 
}

const treeStyle = {
        width: "70%",
        height: "500px",
        margin: "1rem auto",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Tree_PNG})`
}


export default Tree; 