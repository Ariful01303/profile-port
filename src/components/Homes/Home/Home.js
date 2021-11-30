
import { Route, Switch, useRouteMatch } from 'react-router';
import imgme from '../../image/1C2A1111-removebg-preview.png'
import { Link } from 'react-router-dom';
import './DashBord.css'
import About from '../About/About';
import Project from '../../Project/Project';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import { useEffect } from 'react';
import Aos from 'aos';

const Home = () => {
  useEffect(()=>{
    Aos.init({
        offset:100,
        duration:1000,
    });
})
   
    let { path, url } = useRouteMatch();
    return (
        <div className="dash-banner">
        <div className="container mb-5 ">
        <div className="dashboard-container ">
      <div className="row">
        <div className="col-lg-3 col-md-3  col-sm-12 col-12" data-aos="fade-right" >
          <div className="dashboard">
          <img className="img-fluid mt-1 p-2" src= {imgme}alt="" />
           
          
     
              <h5 className="dashboard-menu mt-5  text-center text-primary">Admin Dashboard</h5>

              <Link to={`${url}/about`} className="teast">
                <li className="dashboard-menu ms-2"><i style={{color: 'goldenrod'}} class="far fa-address-card"></i> About</li>
              </Link>
             
              <Link to={`${url}/project`} className="teast">
                <li className="dashboard-menu ms-2"><i style={{color: 'goldenrod'}} class="fas fa-tasks"></i> Project</li>
              </Link>
             
              <Link to={`${url}/blog`} className="teast">
                <li className="dashboard-menu ms-2"><i style={{color: 'goldenrod'}} class="fas fa-blog "></i> Blog</li>
              </Link>
              <Link to={`${url}/contact`} className="teast">
                <li className="dashboard-menu ms-2"><i style={{color: 'goldenrod'}} class="fas fa-paper-plane "></i> Contact Me</li>
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