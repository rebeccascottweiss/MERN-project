import React from 'react';
import { Button } from '@material-ui/core'; 
import axios from "axios";  
import { navigate } from '@reach/router';

const BuyButton = (props) => {
    let { id, route } = props; 
    if(route === undefined){
        route = "https://unicefusa.org"
    }
    const buyHandler = () => {
        axios
            .put(`http://localhost:8000/api/children/${id}`, { isHelped : true })
            .then((res)=>{
                alert('Thank you for your generosity'); 
                window.open(route);
                navigate('/');
            })
            .catch((err)=>{
                console.error(err); 
            }); 
    }

    return (
        <Button onClick={buyHandler} >
            Purchase for this Child. 
        </Button>
    )

}

export default BuyButton;