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
             Xceptre Curved 24.5-inch Gaming Monitor up to 240Hz 1070p
            R1500 1ms DisplayPort x2 HDMI x2 Blue Light
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="7" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">Sceptre </div>
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
        <div className="cat-text">About  :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            AMD FreeSync Premium: By accelerating the frame rate to at least
            120Hz at 1080P FHD resolution and delivering low latency to prevent
            visible delay in data processing, AMD FreeSync Premium allows
            gameplay to reach the highest echelons of performance.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">34000$</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            Add To Cart
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
