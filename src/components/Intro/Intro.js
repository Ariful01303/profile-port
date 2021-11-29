import React from 'react';
import image from '../image/1C2A1111-removebg-preview.png'
import'./Intro.css'
import TypeWriter from 'react-typewriter';
const Intro = () => {
    return (
        <div className="text-center  d-flex justify-content-center align-items-center intro-banner">
            <div className="container">
                
            <div className="row">

           
<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 ">
    <h1 className=" text-warning mt-5">Hi I'm </h1>
    <TypeWriter className="title" style={{color: 'green'}} typing={1}>MD Ariful Islam</TypeWriter>
    <br />
    <TypeWriter className="title" typing={1}>
    
  <span style={{color: 'gold'}}>I am a Full-Stack Web Developer!</span>
 
</TypeWriter>
       
 
</div>
 
<div className="col-lg-6 mt-5 col-md-6 col-sm-12 col-12 ">
<img className="w-75" src={image} alt="" />

  
</div>

                  

</div>
<a href="https://drive.google.com/file/d/1r30gD41Fm39YwuK7uEjtsbckW0UP2PA_/view"><button className="btn btn-primary">Download Resume</button> </a>
            </div>
        </div>
    );
};

export default Intro;