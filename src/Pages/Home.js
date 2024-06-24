import Header from './Header';
import { MdClose } from 'react-icons/md';


import Section1 from './Section-one';
import Section2 from './Section-two'
import Section3 from './Section-three'
import Footer from './Footer'
import QrCode from './QrCode';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Home(){
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
        <div className='' >
      <div className='right' style={{width:left_width}}>
    <Header count={count} expanded={expanded} show2={show2} display={display} incrementCount={incrementCount} handleToggle={handleToggle}/>
    <Section1/>
    <Section2 />
    <Section3 />
    <Footer/>
    </div>
    <div className='left gradient-animation p-4' style={{width:right_width, display:display}}>
            <p className=''>
              <div className='close-icon' onClick={handleCancel} >
                <MdClose/>
              </div>
                <QrCode/>


            </p>
    </div>

    </div>
    );
}
export default Home;