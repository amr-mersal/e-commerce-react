import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddProducts from '../../Components/Admin/AdminAddProduct'
const AdminAddProductPage = () => {
    return (
        <Container className="py-3" >
        <Row style={{minHeight:'800px'}}>
          <Col sm="3" xs="2" md="2">
              <AdminSideBar/>
          </Col>
          <Col sm="8" xs="9" md="9">
                     <AdminAddProducts/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddProductPage