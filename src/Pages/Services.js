
import Services_Section_2 from "./Services-Section-2"
import Services_Section_3 from "./Services_Section_3"
import b3 from '../images/bg4.jpg'
import IntroSame from "./IntroSame";
import Footer from "./Footer";
import backgroundImage from '../images/backback.jpg'
import Header from "./Header";
import { useState } from "react";
import HireMeForm from './QrCode';
import { MdClose } from "react-icons/md";

export default function Services(){
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
<div className='right' style={{width:left_width}} >     
    <div className="about-page w-100 vh-100" style={{backgroundImage:`url(${backgroundImage})`}}>
        <div>
            <Header count={count} expanded={expanded} show2={show2} display={display} incrementCount={incrementCount} handleToggle={handleToggle}/>
        </div>
            <div className='h-75 d-flex justify-content-center align-items-center '>
            
                <div className="col-lg-6 col-md-5 col-7 d-flex justify-content-center align-items-center" >
                    <div className="text-center">
                        <p className=" display-lg-4 display-md-5 display-6   bold">Our Services</p>
                        <p className=" fs-lg-3 fs-md-3 fs-sm-2 bold" style={{color:"black"}}>At ArCarnival, we take pride in offering a comprehensive range of services designed to meet the diverse needs of our valued customers. With a customer-centric approach.
                        </p>
                    </div>
                </div>
            </div>
            </div> 
            
     <Services_Section_2 />
     <Services_Section_3 />
     <Footer/>
</div>
     <div className='left gradient-animation  p-4' style={{width:right_width, display:display}}>
            <p className=''>
                <div className='close-icon'  onClick={handleCancel}>
                <MdClose />
              </div>
                <HireMeForm/>


            </p>
        </div>

</div>
    );
}