import React,{useState} from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import Header from "./Header"


const Donation = () => {
    const [donation, setDonation] = useState(0)
    const [anonname, setAnonName] = useState("")
    const [recipient, setRecipient] = useState("")
    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/donation",{
            donation, 
            anonname,
            recipient,
        })
        .then(res=>{console.log(res.data)
            alert('Thank you for your generosity'); 
            navigate('/');
            })
        .catch(err=>console.log(err))
    }
    return(
        <div> 
            <Header />
            <div style = {{color: "#F9E2B6"}}>
                <br/>
                <h2>Make Donation to Organization</h2>
                <br/>
                <form onSubmit={submitHandler}>
                    <div className = "form-group row d-flex justify-content-center">
                        <label for ="donation" className="col-sm-2 col-form-label"> Donation Amount: $</label>
                        <input type= "Number" step="0.01" className="form-control col-sm-6" style = {{backgroundColor: "#F9E2B6", border: "#F9E2B6"}} onChange={e=>setDonation(e.target.value)}/>
                    </div>
                    <div className = "form-group row d-flex justify-content-center">
                        <label for = "recipient" className="col-sm-2 col-form-label">Recipient:</label> 
                        <input type="Text" className = "form-control col-sm-6" placeholder="Leave Blank If General" style = {{backgroundColor: "#F9E2B6", border: "#F9E2B6"}} onChange={e=>setRecipient(e.target.value)}/>
                    </div>
                    <div className = "form-group row d-flex justify-content-center">
                        <label for = "name" className="col-sm-2 col-form-label">Name: </label> 
                        <input type="Text" className = "form-control col-sm-6" placeholder="Leave Blank If Anonymous" style = {{backgroundColor: "#F9E2B6", border: "#F9E2B6"}} onChange={e=>setAnonName(e.target.value)}/>
                    </div>
                    <button type = "submit" className = "btn-sm" style = {{backgroundColor: "#606F4E", color: "#F9E2B6"}}>Be their Change</button>
                </form>
            </div>
        </div>
    )
}
export default Donation