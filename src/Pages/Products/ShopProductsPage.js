import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCount from '../../Components/Uitlty/SearchCount'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Uitlty/SideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitlty/Pagination'

 const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
    <CategoryHeader/>
    <Container>
    <SearchCount title='Search Rueslts 400'/>
    <Row className='d-flex flex-row'>
        <Col sm='2' xs='2' md='1' className='d-flex'>
        <SideFilter/>
        </Col>
        <Col sm='9' xs='9' md='10' className='d-flex mx-1'>
        <CardProductsContainer title="" btntitle="" />
        </Col>
    </Row>
    <Pagination/>
    
    </Container>
    </div>
  )
}
export default ShopProductsPage
