import "./Section-three.css";
import image1 from "../images/p1.jpg";
import allCards from "./Card";
import { FaArrowRight } from "react-icons/fa";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Section3() {
  const navigate = useNavigate();
  const handleMove = () => {
    navigate("/projects");
  };

  const handleServices = () => {
    navigate("/services");
  };

  return (
    <div className="section-three ">
      <div className="services-intro">
        <p className=" display-4 ">Our Services</p>
        {Data.map(allCards)}
        <div className="d-lg-inline d-md-inline d-flex justify-content-center align-items-center">
          <button
            type="button"
            class=" bg-transparent  btn-read "
            onClick={() => handleServices()}
          >
            <span className="h6">VIEW ALL SERVICES </span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="projects-intro container-s1 p-lg-5 p-md-4 p-2 ">
        <p className="text-sm">Our PROJECT </p>
        <div className="d-lg-flex d-md-flex d-inline container ">
          <div className="col-lg-4 col-md-4 col-12 p-lg-5 p-md-4 p-1">
            <p className=" display-4 ">Birthday Party</p>
            <p className="project-card-description ">
              Embark on a journey of joy with our personalized birthday party
              designs. Picture enchanting decorations, tailor-made themes, and
              unforgettable moments that transform milestones into treasured
              memories. Let us bring your vision to life, curating a celebration
              that not only reflects the uniqueness of the guest of honor but
              also infuses every detail with the warmth of shared laughter and
              happiness. Join us in creating an immersive experience where every
              element is thoughtfully chosen, promising an extraordinary and
              heartfelt celebration for you and your loved ones"
            </p>
            <div className="d-lg-inline d-md-inline d-flex justify-content-center align-items-center">
              <button
                type="button"
                class=" bg-transparent btn-read mt-lg-5 mb-lg-5 mt-md-3 mb-md-3 mt-3 mb-3"
                onClick={handleMove}
              >
                VIEW ALL PROJECTS <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-12 m-0 p-0">
            <img src={image1} alt="Owner" className="img-thumbnail" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
