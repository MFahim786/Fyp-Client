import Footer from './Footer';
import ContactForm from '../ContactForm';
import React, { useState } from 'react';
import backgroundImage from '../images/backback.jpg'
import Header from './Header';
import { MdClose } from 'react-icons/md';

import QrCode from './QrCode';

function Contact () {
    const [count, setCount] = useState('');
    const [display, setDisplay] = useState('none')
    const [show2, setShow2] = useState(true);
    const [left_width, setLeft_width] = useState('')
    const [right_width, setRight_width] = useState('')
    const [expanded, setExpanded] = useState(false);


  const handleCancel = () => {
    setLeft_width('')
    setDisplay('none')
    setCount('inline')
  }

  const incrementCount = () => {
    setCount('none');
    setLeft_width('70vw')
    setRight_width("30vw")
    setDisplay('inline')

  };

  const handleToggle = () => {
    setExpanded(!expanded);
    setShow2(!show2)
    
  };


        return(
        <div>
       <div className='right' style={{width:left_width}}>
          <div className="about-page w-100 vh-100" style={{backgroundImage:`url(${backgroundImage})`}}>
        <div>
                    <Header count={count} expanded={expanded} show2={show2} display={display} incrementCount={incrementCount} handleToggle={handleToggle}/>
        </div>
            <div className='h-75 d-flex justify-content-center align-items-center '>
            
                <div className="col-lg-6 col-md-5 col-7 d-flex justify-content-center align-items-center" >
                    <div className="text-center">
                        <p className=" display-lg-4 display-md-5 display-6   bold">Contact us</p>
                        <p className=" fs-lg-3 fs-md-3 fs-sm-2 bold" style={{color:"black"}}>We value your 
                        feedback and inquiries. If you have any questions, suggestions, or concerns, please don't hesitate
                         to reach out to us. Our dedicated team is here to assist you.
                        </p>
                    </div>
                </div>
            </div>
            </div> 

        <ContactForm/>
        <Footer/>
        </div>
        <div className='left gradient-animation p-4' style={{width:right_width, display:display}}>
            <p className=''>
                <div className='close-icon' onClick={handleCancel} >
                <MdClose  />
                </div>
                <QrCode/>


            </p>
        </div>
    </div>
        
    );
}
export default Contact;