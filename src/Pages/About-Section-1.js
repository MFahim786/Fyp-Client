import "./Section-one.css";
import Owner from "../images/Owner.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ASection1() {
  const navigate = useNavigate();
  function handleButtonClick() {
    window.location.href = "https://www.google.com";
  }

  return (
    // <section>
    // <div className="container-fluid container-s1">
    // <div className="intro-div">
    //     <div className="left-intro">
    //         <div className="left-intro-1">
    //             <p className="text-sm">AWARD WINNING INTERIOR DESIGNER​</p>
    //             <p className=" display-4 ">I'm Xanny Alim,
    //             <br></br>Interior Designer.</p>
    //             <p className="intro-para">
    //                Totam cillum molestie a dolore alias diamlorem corrupti.
    //                 Exercitationem iure. Risus maxime mollis molestias exercitation nascetur non
    //                 repudiandae sit voluptates velit praesentium! Netus natus dicta nibh condimentum
    //                  porta congue platea cras lacinia pretium, explicabo qui praesent duis minima hendrerit.
    //                  Voluptas illum duis voluptas dignissimos saepe suspendisse veritati.

    //             </p>
    //             <div className="intro-points" >
    //                 {/* <div className="intro-points-l">400+ Projects Done</div>
    //                 <div className="intro-points-r">100+ Happy Clients</div> */}
    //                 <h5 className="text-uppercase mb-3 mt-4 font-weight-bold ">Get in Touch</h5>
    // <div >
    //     <ul className="list-inline-icons ">
    //       <div className=""><a href="#"><FontAwesomeIcon icon={faFacebook} className="text-black"/></a></div>
    //       <div className=""><a href="#"><FontAwesomeIcon icon={faTwitter} className="text-black"/></a></div>
    //       <div className=""><a href="#"><FontAwesomeIcon icon={faInstagram} className="text-black"/></a></div>
    //       <div className=""><a href="#"><FontAwesomeIcon icon={faYoutube} className="text-black"/></a></div>
    //       <div className=""><a href="#"><FontAwesomeIcon icon={faWhatsapp} className="text-black"/></a></div>
    //     </ul>
    // </div>
    //             </div>

    //         </div>
    //     </div>
    //     <div className="right-intro">
    //     <div className="right-intro-1">
    //         <img src={Owner} alt="Owner"  className="img-fluid img-owner" />
    //     </div>
    //     </div>
    // </div>

    // </div>
    // </section>
    <section>
      <div className="container-fluid container-s1">
        <div className=" p-lg-4 p-md-4 p-0">
          <div className="d-lg-flex d-md-inline d-inline">
            <div className="left-intro col-lg-6 col-md-12 col-12">
              <div className="left-intro-1 px-lg-5 py-lg-5 px-md-0 py-md-0 px-0 py-0">
                <p className="text-sm">Event Designer​</p>
                <p className=" display-4">
                  we are Ar-Carnival,
                  <br></br>Event Designer & Manager.
                </p>
                <p className="text-muted">
                  Step into a new dimension of event innovation. In a world
                  where reality and imagination collide, we present a paradigm
                  shift in event organization and design. ArCarnival is not just
                  a platform; it's an invitation to revolutionize how we
                  perceive, plan, and experience events. By seamlessly weaving
                  Augmented Reality into the fabric of event design, ArCarnival
                  transcends the ordinary, delivering extraordinary moments that
                  linger in the hearts and minds of attendees. Join us on this
                  transformative journey, where every event becomes a
                  captivating carnival of digital possibilities.
                </p>
                <div className="">
                  {/* <div className="intro-points-l">400+ Projects Done</div>
                        <div className="intro-points-r">100+ Happy Clients</div> */}
                  <div>
                    <p className="text-uppercase bold mb-lg-3 mb-0  mt-lg-4 mt-0 font-weight-bold ">
                      Get in Touch
                    </p>
                  </div>
                  <div>
                    <ul className="list-inline-icons ">
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-intro col-lg-6 col-md-12 ">
              <div className="right-intro-1 h-70 ">
                <img src={Owner} alt="Owner" className="img-fluid h-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
