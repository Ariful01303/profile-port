import Aos from 'aos';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const AllPro = (props) => {
    const history=useHistory()
    const{name,photo,end,start,id}=props.pro
    const handlar=()=>{
        history.push(`/detail/${id}`)
    }
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:1000,
        });
    })
    return (
        <div className="col-xl-4 col-md-4 col-sm-12 col-12 p-2  text-center"data-aos="fade-left" >
        <div className="cart-style">
            <img className="img-fluid p-2" src={photo} alt="" />
            <h4 className="text-light">{name}</h4>
            <p className="text-light">Start: {start}</p>
            <p className="text-light">Complite: {end}</p>
           <button className="btn btn-danger text-center mb-2" onClick={handlar}>View Details</button>
             
           
            </div>
            </div>
            
        
    );
};

export default AllPro;