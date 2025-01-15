import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export default function DetailsStudent (){
    const {studentID} = useParams();//استخراج ID 
    const [studentData, setStudentData]=useState({})
    useEffect(() => {
        fetch("http://localhost:7000/students/" + studentID)
          .then((res) => res.json())
          .then((data) => setStudentData(data))
          .catch((err) => console.log(err.message));
      }, [studentID]); 
      
    return(
    <div className="container-view">
    <h1>Student Details</h1>
   {studentData && <div className="details">
        <p><strong>ID:</strong>{studentData.id} </p>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Place:</strong>{studentData.place}</p>
        <p><strong>Phone:</strong>{studentData.phone}</p>
    </div>
    } 
    <Link to="/" className="btn btn-danger back-btn"> Back </Link>
    </div>
    )
}