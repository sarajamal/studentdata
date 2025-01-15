import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable(){
    const [students , setStudents]= useState("");
    const navigate = useNavigate();
    const DisplayDetails=(id)=>{
        navigate("/student/view/"+id)
    }
    const DetailsEdit=(id)=>{
        navigate("/student/edit/"+id)
    }

    const RemoveDetails=(id)=>{
     if(window.confirm("Are You Sure You Want To Delete?")){
        fetch('http://localhost:7000/students/'+ id,{
            method:'DELETE',
        })
        .then((res)=>{alert ("Remove Student Data Successfully")
          window.location.reload();
        })
        .catch((error)=> console.log(error.message))
     }

    }
    useEffect(() => {
        fetch('http://localhost:7000/students')
          .then((res) => res.json())
          .then((data) => setStudents(data))
          .catch((err) => console.error(err));
      }, []);

    return(
        <div className="container"> 
            <h2>Student Records</h2>
            <div className="table-container">
                <Link to="/student/create" className="btn btn-add">Add New Student</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td>Name</td>
                        <td>Place</td>
                        <td>Phone</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {
                  students && students.map((items,index) => (
                        <tr key={items.id}>
                          <td>{index+1}</td>
                          <td>{items.name}</td>
                          <td>{items.place}</td>
                          <td>{items.phone}</td>
                          <td>
                            <button   className="btn btn-info m-1" onClick={()=>DisplayDetails(items.id)}>View</button>
                            <button  onClick={()=>DetailsEdit(items.id)} className="btn btn-primary m-1 text-white">Edit</button>
                            <button onClick={()=>RemoveDetails(items.id)} className="btn btn-danger m-1 ">Delete</button>
                          </td>
                        </tr>
                      
                        ))
                            
                        }
                    
                   
                </tbody>
            </table>
        </div>
    )
}