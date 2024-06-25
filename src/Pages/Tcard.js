import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Theme.css";
import { MdClose } from "react-icons/md";
import VisaCardForm from "../PymentMethod";
function TCard(props) {


  const [showPopup, setShowPopup] = useState(false);

  const handleReadMore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="d-lg-flex d-md-inline d-inline">
       

        <div className="container-fluid py-lg-5 py-md-0 py-0 px-lg-5 px-md-0 px-0">
          <div className="d-lg-flex d-md-inline d-inline">
            <div className="col-lg-4 col-md-4 col-12 mt-5 px-lg-5 px-2">
              <h2 className="display-4 bold">{props.title}</h2>
              <p className="mt-lg-4 mt-2">{props.description}</p>
              <div className=" d-lg-inline d-flex justify-content-center align-items-center">
                <button
                  onClick={handleReadMore}
                  className="read-button b-lg-0 mb-2 w-lg-25 w-50 px-lg-2 px-1 py-lg-2 py-1"
                >
                  <span className="px-lg-3 px-2 fs-6 ">Try Ones</span>
                  <FaArrowRight />
                  <span className="px-lg-3 px-2 fs-6 ">{props.price}</span>
                </button>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12 ">
              {" "}
              <img
                src={props.img}
                alt="placeholder"
                className="img-fluid h-lg-100 px-lg-5 px-0 py-lg-5 py-0"
              />
            </div>
          </div>
        </div>

        

       {showPopup && (
          props.type === 'Premium' ? (
            <div className="popup-container">
              <div className="popup-content">
                <div className="close-icon" onClick={handleClosePopup}>
                  <MdClose />
                </div>
                <div className="mt-3 px-4">
                 <VisaCardForm/>
                </div>
              </div>
            </div>

        ):(
          <div className="popup-container">
          <div className="popup-content">
            <div className="close-icon" onClick={handleClosePopup}>
              <MdClose />
            </div>
            <div className="mt-3 px-4">
              <p className="display-5 bold">{props.title}</p>
              <img src={props.img1} class="img-thumbnail" alt="..." />
            </div>
            <div className="px-3 mt-2">
              <h5>Try Ones </h5>
              <div className="d-flex">
                <div>
                  <h2 className="display-7">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <br></br>
                  </h2>
                  <p className="text-justify">{props.msg}</p>
                  <p className="bold">{props.name}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-end mb-2 mt-5 px-2">
                    <img
                      src={props.img2}
                      class="rounded-circle"
                      alt="..."
                      style={{ width: "7rem", height: "8rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          )
        )}
      </div>
    </div>
  );
}
export default function allTCards(val, index, data) {
  return (
    <TCard
      title={val.title}
      description={val.description}
      img={val.img}
      name={val.name}
      msg={val.msg}
      img1={val.img1}
      img2={val.img2}
      type={val.type}
      price={val.price}
    />
  );
}
