import React,{useState} from "react"
import axios from "axios"

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
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return(
        <div> 
            <h2>Make Donation to Organization</h2>
            <form onSubmit={submitHandler}>
                <p>Donation Amount: <input type= "Number"  onChange={e=>setDonation(e.target.value)}/></p>
                <p>Recipient: <input type="Text" placeholder="Leave Blank If General" onChange={e=>setRecipient(e.target.value)}/></p>
                <p>Name: <input type="Text" placeholder="Leave Blank If Anonymous" onChange={e=>setAnonName(e.target.value)}/></p>
                <button>Be their Change</button>
            </form>
        </div>
    )
 }
export default Donation