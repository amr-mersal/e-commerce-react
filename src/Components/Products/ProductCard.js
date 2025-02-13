import React from 'react'
import { Card, Col } from 'react-bootstrap'
import favoff from "../../Images/fav-off.png";
import ratee from "../../Images/rate.png";
import { Link } from 'react-router-dom';


 const ProductCard = ({title,rate,price,img}) => {
  return (
    <Col xs="11" sm="11" md="6" lg="4" className="d-flex">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to="/products/:id" style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            {title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={ratee}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2"> {rate}</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">{price}</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
  )
}
export default ProductCard
