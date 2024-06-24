
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Form } from 'reactstrap';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
emailjs.init('ZOmQZ39MZpW8aGD9m');



function ContactForm() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
    const [form, setForm] = useState({
    sender_name: '',
    sender_email: '',
    message:''
  });

   const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_itytsyx', 'template_eydiv7r', e.target)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        console.log(form)
         setForm({
            sender_name: '',
            sender_email: '',
            message: ''
    });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      });

      const response = await fetch('http://localhost:8080/',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
    })

    // Reset form fields

  };

 

  return (
    // <div className=' d-flex' style={{backgroundColor:"rgb(229, 229, 233)"}}>
    // <div className='py-5 px-5 m-5' style={{width:"50%"}}>
    //     <p className='display-4' >Contact Us </p>
    //     <p>Testimonials are an important aspect of a business or service as they provide social
    //      proof and help build credibility and trust with potential customers. They are statements or comments</p>
    // </div>
    // <div className='py-5 px-5 ' style={{width:"50%"}}>

    <div className="container-fluid d-lg-flex d-block py-lg-5 px-lg-5 p-0" style={{backgroundColor:"rgb(229, 229, 233)"}}>
     <div className='p-lg-5 m-lg-5 m-0 w-lg-50 w-100 p-3'>
        <p className='display-4' >Contact Us </p>
        <p className=''>Testimonials are an important aspect of a business or service as they provide social
         proof and help build credibility and trust with potential customers. They are statements or comments</p>
    </div>
      <div className="row mt-lg-5 mt-1 px-5 px-md-4 px-lg-5 pb-5 pb-md-4 pb-lg-2 w-lg-50 w-md-90 w-100" >
        <div className="col-md-8 mx-auto">
          <h2>Contact Us</h2>
          <form onSubmit={handleFormSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="sender_name"
                value={form.sender_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="sender_email"
                value={form.sender_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-transparent px-2 btn-read mt-3"><span className='px-2'>Send Message </span><FaArrowRight/></button>
          </form>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}

export default ContactForm;
