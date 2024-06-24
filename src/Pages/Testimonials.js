import React, { useState } from 'react';
import HeaderTest from './HeaderTest';
import Footer from './Footer';
import Header from './Header';

const Testimonial = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState('none')
  const [left_width, setLeft_width] = useState('100vw')
  const [right_width, setRight_width] = useState('0vw')


  const incrementCount = () => {
    setCount(count + 1);
    setLeft_width('50vw')
    setRight_width("50vw")
    setDisplay('inline')

  };

  return (
    <div className='d-flex'>
    <Header />
    <div className='right bg-secondary' style={{width:left_width}}>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <HeaderTest count={count} incrementCount={incrementCount} />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      

    </div>
    <div className='bg-primary left' style={{width:right_width, display:display}}></div>
    </div>
  );
};

export default Testimonial;