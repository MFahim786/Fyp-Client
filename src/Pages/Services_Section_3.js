import allCards from "./Card";
import { FaArrowRight } from "react-icons/fa";
import Data from "./Data";
import { useNavigate } from "react-router-dom";

const Services_Section_3 = () => {
  const navigate = useNavigate();
  const handleMove = () => {
    navigate("/contact");
  };
  return (
    <div className="container-fluid">
      <div className="container justify-content-center align-items-center d-flex">
        <div className="">
          <div className="row px-5 py-5">
            <h2>Our Expertise</h2>
            {/* <p className="text-sm">
                            You can use a few enticing words and flaunt your
                             clients and encourage them to hire you right away
                        </p> */}
          </div>

          <div className="">
            {Data.map(allCards)}
            <div className="d-lg-inline d-md-inline d-flex justify-content-center align-items-center">
              <button
                type="button"
                class=" bg-transparent m-3 btn-read bold"
                onClick={handleMove}
              >
                <span className="px-3">Need Custom Work ?</span>{" "}
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services_Section_3;
