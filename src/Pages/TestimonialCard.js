import React from 'react';
import b3 from '../images/b3.jpg'
import { Container, Row, Col, Image } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = (props) => {
  return (
        <div>
            <div className="container vh-50 py-5 px-5">
                <div className="container h-100">
                    <Row className="h-100">
                    <Col md={4} className="d-flex flex-column justify-content-center">
                        <h2 className='display-7'><FontAwesomeIcon icon={faQuoteLeft} /><br></br></h2>
                        <p className='text-justify mt-4'>{props.msg}</p>
                        <p className='bold'>{props.name}</p>
                    </Col>
                    
                    <Col md={8} className='col-8 d-flex'>
                        <img  src={props.img1} alt="placeholder" className="img-fluid px-1" style={{width:'40%' ,height:"35rem"}}/>
                        <img src={props.img2} alt="placeholder" className="img-fluid px-1"  style={{width:'60%'}} />
                
                    </Col>
                    </Row>
                </div>
            </div>
        </div>
  );
};

export default function allTestimonialCard(val, index, data){
    
    return(
    
         <TestimonialCard name={val.name}
            msg={val.msg}
            img2={val.img2}
            img1={val.img1}
         />
    );
  }
  
