import React from 'react'
import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from './UserAllOrderCard';

 const UserAllOrderItem = () => {
  return (
    <div className="user-order mt-2">
    <Row>
        <div className="py-3 order-title">N.Of.Order #234556</div>
    </Row>
    <UserAllOrderCard />
    <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
            <div>
                <div className="d-inline">Status</div>
                <div className="d-inline mx-2 stat">In progress</div>
            </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
            <div>
                <div className="barnd-text">$ 4000</div>
            </div>
        </Col>
    </Row>
</div>
  )
}
export default UserAllOrderItem
