import React from "react";
import { ReactDOM } from "react";
import Data from "./Data";
import './Section-two.css';


function Card(props){
    return(
        <> 
        {/* margin: 2rem 4rem 2rem 0;
    padding: 1.5rem; */}
    <div className=" d-lg-inline d-md-inline d-flex justify-content-center align-items-center">
        <div className = "service-card m-3 p-4 ">
        <div className = "fw-lg-600 py-lg-2 fw-md-600 py-md-2 fw-400 py-1 bold">{props.id}</div>
        <div className = "h2">{props.name}</div>
        <div className = "service-card-description ">{props.description}</div>
        </div>
      </div>  
        
        </>
    );
}


export default function allCards(val, index, data){
    
    return(
    
      <Card 
        id = {val.id}
        name = {val.name}
        description = {val.description}
  
      />
    );
  }
  

