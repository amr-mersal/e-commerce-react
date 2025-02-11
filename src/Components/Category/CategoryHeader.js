import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Electronics</div>
            <div className="cat-text-header">Clothes</div>
            <div className="cat-text-header"> Toys and Games</div>
            <div className="cat-text-header">Video Games</div>
            <div className="cat-text-header">Laptops</div>
            <div className="cat-text-header">Home Accessories</div>
            <div className="cat-text-header">Computers</div>
            <div className="cat-text-header">Mobiles</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader