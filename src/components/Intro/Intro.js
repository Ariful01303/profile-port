import React, { useEffect } from 'react';
import Typical from 'react-typical'
import image from '../image/1C2A1111-removebg-preview.png'
import'./Intro.css'
import TypeWriter from 'react-typewriter';
import Aos from 'aos';
const Intro = () => {
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:2000,
        });
    })
    return (
        <div className="text-center  d-flex justify-content-center align-items-center intro-banner">
            <div className="container">
                
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 ">
    <h1 className=" mt-5"style={{color: 'rgb(81, 149, 175)'}}>Hi I'm </h1>
    <TypeWriter className="title" style={{color: '#f193a1'}} typing={1}>MD Ariful Islam</TypeWriter>
    <br />
    <h1  className="title" style={{color: ' #f193a1'}}>
       <span className="title" style={{color: 'rgb(81, 149, 175)'}}>I'm a</span>
        {""}
        <Typical  
        loop={Infinity}
        steps={[

            "Full Stake Web Developer",
            1000, 
            "React Developer",
            1000, 
            "Web Designer",
            1000,
        ]}
        />
    </h1>
       
<div className="mt-5" data-aos="fade-up">
<a href="https://drive.google.com/file/d/1r30gD41Fm39YwuK7uEjtsbckW0UP2PA_/view">

    <button className="btn btn-primary">Download Resume</button> </a>
</div>
</div>
 
<div className="col-lg-6 mt-5 col-md-6 col-sm-12 col-12 " data-aos="fade-left">
<img className="w-75" src={image} alt="" />

  
</div>

                  

</div>

            </div>
        </div>
    );
};

export default Intro;