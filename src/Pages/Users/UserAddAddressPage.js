import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/Users/UserSideBar";
import UserAddAddress from "../../Components/Users/UserAddAddress";
const UserAddAddressPage = () => {
  return (
    <Container className="py-3">
      <Row style={{ minHeight: "800px" }}>
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="8" xs="9" md="9">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddAddressPage;
