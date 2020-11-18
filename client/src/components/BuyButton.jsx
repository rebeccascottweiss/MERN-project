import React from 'react';
import { Button } from '@material-ui/core'; 
import axios from "axios";  
import { navigate } from '@reach/router';

const BuyButton = (props) => {
    const { id } = props; 

    const buyHandler = () => {
        axios
            .put(`http://localhost:8000/api/children/${id}`, { isHelped : true })
            .then((res)=>{
                alert('Thank you for your generosity'); 
                navigate('/'); 
            })
            .catch((err)=>{
                console.error(err); 
            })
    }

    return (
        <Button onClick={buyHandler} >
            Purchase for this Child. 
        </Button>
    )

}

export default BuyButton;