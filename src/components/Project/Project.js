import React, { useEffect, useState } from 'react';
import '../Contact/Contact.css'
const Project = () => {
    const [project,setProject]=useState([]);
    useEffect(()=>{
     fetch('/fakeData.json')
     .then(res=>res.json())
     .then(data=>setProject(data))
    },[])
    return (
        <div className="container mt-2">
           <h2 className="text-warning">My Project</h2>
           <div className="d-flex row">
            
            {
               project.map(pro=><div  className="col-xl-4 container col-md-4 col-sm-12 col-12 p-2 text-center
           ">
                   
        <div className="cart-style p-1">
            <img className="img-fluid" src={pro.photo}alt="" />
            <h4 className="text-light">{pro.name}</h4>
            <p className="text-light">Start: {pro.start}</p>
            <p className="text-light">Complite: {pro.end}</p>
           
           
            <div className="  p-4">
            <button className="btn btn-danger text-center">View Details</button>
             
           
            </div>
            </div>
            
        </div>
               )
           }
           
           
           </div>
        </div>
    );
};

export default Project;