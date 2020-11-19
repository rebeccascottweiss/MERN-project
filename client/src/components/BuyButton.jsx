import React from 'react';
import { Button } from '@material-ui/core'; 
// import axios from "axios";  
// import { navigate } from '@reach/router';

const BuyButton = (props) => {
    const { id, route } = props; 

    const buyHandler = () => {
        console.log(`This is the link we want ${route}`); 
        console.log(`This is the kiddo: ${id}`)
        // axios
        //     .put(`http://localhost:8000/api/children/${id}`, { isHelped : true })
        //     .then((res)=>{
        //         alert('Thank you for your generosity'); 
        //     })
        //     .catch((err)=>{
        //         console.error(err); 
        //     }); 
        // window.open(this.makeHref(route))
    }

    return (
        <Button onClick={buyHandler} >
            Purchase for this Child. 
        </Button>
    )

}

export default BuyButton;