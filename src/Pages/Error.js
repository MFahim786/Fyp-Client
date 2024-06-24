import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">404 Error: Page Not Found</h1>
          <p className="text-center mb-4">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="d-flex justify-content-center">
            <Button as={Link} to="/" variant="primary">
              Go back to homepage
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
