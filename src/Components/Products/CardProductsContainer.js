import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Subtitle from '../Uitlty/SubTitle'
import ProductCard from './ProductCard'
import prod1 from "../../Images/prod1.png";
import mouse from "../../Images/mouse.png";
import mobile from '../../Images/mobile1.png'
 const CardProductsContainer = ({title,btntitle,pathText}) => {
  return (
     <Container>
    <Subtitle title={title} btntitle={btntitle} pathText={pathText}/>
    <Row className='my-2 d-flex justify-content-between'>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display" price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical - 54g Lightweight" price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    </Row>

    </Container>
  )
}
export default CardProductsContainer
