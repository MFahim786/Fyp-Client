import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Team1 from "../images/t1.jpg";
import Team2 from "../images/Team2.jpg";
import Team3 from "../images/Team3.png";

const Team = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-4">
          <Card className="border-0">
            <CardImg
              top
              width="100%"
              src={Team1}
              alt=""
              className="image-fluid"
            />
            <CardBody>
              <CardTitle tag="h5">KaneezZahra</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Web Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0">
            <CardImg top width="100%" src={Team2} alt="Team Member 2" />
            <CardBody>
              <CardTitle tag="h5">Ammar Aziz</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ar-Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0">
            <CardImg top width="100%" src={Team3} alt="Team Member 3" />
            <CardBody>
              <CardTitle tag="h5">Fahim Qasim</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Marketing Manager
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
