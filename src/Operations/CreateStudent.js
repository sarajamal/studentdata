import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent (){
    const[id,setId]= useState("");
    const[name,setName]= useState("");
    const[place,setPlace]= useState("");
    const[phone,setPhone]= useState("");

    const [validation,setValidation] = useState(false)
    const navigate=useNavigate();

   const handleSubmet =(e)=>{
        e.preventDefault();
       const StudentData = {id,name,place,phone};
    fetch('http://localhost:7000/students',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(
            StudentData
        )
    }).then((res)=>{alert ("Student Data Saved Successfully")
        navigate("/")
    })
    .catch((error)=> console.log(error.message))
    }
    return(
        <form onSubmit={handleSubmet}>
        <div className="container">
        <h2>Add New Student</h2>
        <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id"className="form-input" onChange={e=>setId(
            e.target.value)} required value={id} onMouseDown={()=>setValidation(true)}></input>
            {id.length===0 && validation &&
       <span className="errMG"> Please  Enter Your ID </span>}
         </div>

         <div className="form-group">
        <label htmlFor="name">NAME:</label>
        <input type="text" id="name" name="name"className="form-input" onChange={e=>setName(
            e.target.value)} required value={name} onMouseDown={()=>setValidation(true)}></input>
        {name.length===0 && validation &&
       <span className="errMG"> Please  Enter Your Name </span>}
        </div>

        <div className="form-group">
        <label htmlFor="place">PLACE:</label>
        <input type="text" id="place" name="place"className="form-input"
         onChange={e=> setPlace(e.target.value)} required value={place} onMouseDown={()=>setValidation(true)}></input>
        {place.length===0 && validation &&
        <span className="errMG"> Please  Enter Your Place </span>}
         </div>
         

         <div className="form-group">
        <label htmlFor="phone">PHONE:</label>
        <input type="text" id="phone" name="phone"className="form-input"
         onChange={e=> setPhone(e.target.value)} required value={phone}onMouseDown={()=>setValidation(true)}></input>
         {phone.length===0 && validation &&
        <span className="errMG"> Please  Enter Your number </span>}
       </div>
         <div className="d-flex gap-1">
         <button className="btn-submit">Save</button>

         <Link to="/" className="btn-back">Back</Link>
         </div>
      
       </div>
        </form>
       
    )
}