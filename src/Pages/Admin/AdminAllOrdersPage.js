import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../Components/Uitlty/Pagination";
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllOrders from '../../Components/Admin/AdminAllOrders';
 const AdminAllOrdersPage = () => {
  return (
    <Container className="py-3" >
    <Row style={{minHeight:'800px'}}>
      <Col sm="3" xs="2" md="2">
          <AdminSideBar/>
      </Col>
      <Col sm="8" xs="9" md="9">
          <AdminAllOrders/>
          
      </Col>
    </Row>
    <Pagination/>
  </Container>
  )
}
export default AdminAllOrdersPage
