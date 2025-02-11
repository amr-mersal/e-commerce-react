import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitlty/Pagination";


const AdminAllProductsPage = () => {
  return (
    <Container className="py-3" >
      <Row style={{minHeight:'800px'}}>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar/>
        </Col>
        <Col sm="8" xs="9" md="9">
            <AdminAllProducts/>
            
        </Col>
      </Row>
      <Pagination/>
    </Container>
  );
};
export default AdminAllProductsPage;
