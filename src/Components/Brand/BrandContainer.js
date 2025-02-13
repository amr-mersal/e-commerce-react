import React from "react";
import BrandCard from "./BrandCard";
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";
import brand4 from "../../Images/apple.png";
import brand5 from "../../Images/samsung.png";
import brand6 from "../../Images/Razer.png";
import { Container, Row } from "react-bootstrap";
const BrandContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">All Brands </div>
      <Row className="my-1 mx-1 d-flex justify-content-between ">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
      </Row>
    </Container>
  );
};

export default BrandContainer;
