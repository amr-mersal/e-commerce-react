import React from "react";
import { Row, Col } from "react-bootstrap";

const ProductText = () => {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics :</div>
      </Row>
      <Row>
        <Col md="7">
          <div className="cat-title d-inline">
            Apple iPhone X, 64GB Unlocked - Gray
            <div className="cat-rate d-inline mx-3">4.2</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="7" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">Apple </div>
        </Col>
      </Row>
      <Row>
        <Col md="7" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}
          ></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">About :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            Unlocked and compatible with all service providers Worldwide Tested
            for battery health and guaranteed to have a minimum battery capacity
            of 80% Successfully passed a full diagnostic test which ensures
            like-new functionality and removal of any prior-user personal
            information. Includes Charger and Cable. Does not include the Sim
            Card
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">800$</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            Add To Cart
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
