import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import imgme from '../../image/1C2A1111-removebg-preview.png'
import { Link } from 'react-router-dom';
import './DashBord.css'
import About from '../About/About';
import Project from '../../Project/Project';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';

const Home = () => {
   
    let { path, url } = useRouteMatch();
    return (
        <div className="intro-banner">
        <div className="container mb-5 ">
        <div className="dashboard-container ">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12" >
          <div className="dashboard">
          <img className="dash-pic mt-5" src= {imgme}alt="" />
           
          
     
              <h5 className="dashboard-menu mt-5 text-primary">Admin Dashboard</h5>

              <Link to={`${url}/about`} className="teast">
                <li className="dashboard-menu">About</li>
              </Link>
             
              <Link to={`${url}/project`} className="teast">
                <li className="dashboard-menu ">Project</li>
              </Link>
             
              <Link to={`${url}/blog`} className="teast">
                <li className="dashboard-menu">Blog</li>
              </Link>
              <Link to={`${url}/contact`} className="teast">
                <li className="dashboard-menu">Contact Me</li>
              </Link>
             
              
            </div>
            
          </div>
          
     
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
          <Switch>
            <Route exact path={`${path}/about`}>
              <About></About>
            </Route> 
             <Route exact path={`${path}/project`}>
              <Project></Project>
            </Route> 
             <Route exact path={`${path}/blog`}>
              <Blog></Blog>
            </Route> 
              <Route exact path={`${path}/contact`}>
              <Contact></Contact>
            </Route> 
            
          </Switch>
        </div>
        </div>
        </div>
      </div>
      </div>
  
    );
};

export default Home;