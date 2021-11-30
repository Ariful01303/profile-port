import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Aos from 'aos';

const Result=()=>{
   return(
       <p>Your message has been Successfully sent.</p>
   )
}
const Contact = () => {
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:1000,
        });
    })
    const form = useRef();
      const [result,setResult]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lu6t91n', 'template_gpb9uxs', form.current, 'user_7YmGiXmXPwxN6voOWWgxa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setResult(true);
    };
    setTimeout(()=>{
        setResult(false)
    },5000)
    return (
        <div className="container mt-5 contact-side">
             <form ref={form} onSubmit={sendEmail}>
   
     <div className="p-5">
     <input className="p-2 m-2 w-50" data-aos="fade-down" type="text" name="fullName" placeholder="Your Name" />
      <br />
  
      <input className="p-2 m-2 w-50" data-aos="fade-down" type="email" name="email" placeholder="Your Email" />
      <br />
     
      <textarea className="p-2 m-2 w-50" data-aos="fade-up" name="message" placeholder="Your Message" />
      <br />
      <input className="btn btn-primary" data-aos="fade-up" type="submit" value="Send" />
      <div className="mt-5">
     {result ? <Result/>:null}
      </div>
     </div>
    </form>
        </div>
    );
};

export default Contact;