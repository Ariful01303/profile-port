import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    let {code}=useParams();
    const [corses,setCorses]=useState([])
    const [corse,setCorse]=useState({})
   
    useEffect(()=>{
        
        fetch("/fakeData.json")
        .then(res=>res.json())
        .then(data=>setCorses(data))
    },[])
    useEffect(()=>{
        const foundCorse=corses.find((cor)=>cor.id===code)
        setCorse(foundCorse)
    },[corses]);
     
    return (
        <div className="container" >
          <h1>{corse?.name}</h1> 
       <div className="d-flex">
       <div className="row p-2">
            <div className="col-xl-6 col-md-6 col-sm-12 col-12 m-auto cart-style1 text-center">
            <img className="img-fluid p-2" src={corse?.pic1} alt="" /><br />
            <p>{corse?.text1}</p><br />
            <img className="img-fluid p-2" src={corse?.pic2} alt="" /><br />
            <p>{corse?.text2}</p><br />
            <img className="img-fluid p-2" src={corse?.pic3} alt="" />
            <p>{corse?.text3}</p><br />
            </div>
          
        </div>
       </div>
        </div>
    );
};

export default Detail;