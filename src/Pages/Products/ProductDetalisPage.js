import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from './../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';

 const ProductDetalisPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
    <CategoryHeader/>
    <Container>
        <ProductDetails/>
        <CardProductsContainer title="similar items"/>
        <RateContainer/>
    </Container>
    
    </div>
  )
}
export default ProductDetalisPage
