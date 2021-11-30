import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import AllPro from '../AllPro/AllPro';
import '../Contact/Contact.css'
const Project = () => {
  
    const [project,setProject]=useState([]);
    useEffect(()=>{
     fetch('/fakeData.json')
     .then(res=>res.json())
     .then(data=>setProject(data))
    },[])
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:1000,
        });
    })
   
    return (
        <div className="container mt-2">
           
           <h2 className="text-warning">My Project</h2>
           <div className="d-flex row">
            
            {
               project.map(pro=><AllPro
                 key={pro.id}
                 pro={pro}
               ></AllPro>
               )
           }
           
           
           </div>
        </div>
    );
};

export default Project;