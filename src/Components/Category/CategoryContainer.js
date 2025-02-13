import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import mouse from "../../Images/mouse.png";
import pic from "../../Images/pic.png";
import mobile from '../../Images/mobile1.png'
import CategoryCard from '../Category/CategoryCard'
 const CategoryContainer = () => {
  return (
    <Container>
    <div className='admin-content-text mt-2  '>All Category</div>
    <Row className='my-2 d-flex justify-content-between'>
    <CategoryCard title="Clothes" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="Skin care" img={cat2} background='#0034FF'/>
    <CategoryCard title="Electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="Electronics" img={mouse} background='#FF6262'/>
    <CategoryCard title="Electronics" img={mobile} background='#F4DBA4'/>
    <CategoryCard title="Kitchen appliances" img={pic} background='#F4DBA4'/>
    <CategoryCard title="Clothes" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="Skin care" img={cat2} background='#0034FF'/>
    <CategoryCard title="Electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="Electronics" img={mouse} background='#FF6262'/>
    <CategoryCard title="Electronics" img={mobile} background='#F4DBA4'/>
    <CategoryCard title="Kitchen appliances" img={pic} background='#F4DBA4'/>
    <CategoryCard title="Clothes" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="Skin care" img={cat2} background='#0034FF'/>
    <CategoryCard title="Electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="Electronics" img={mouse} background='#FF6262'/>
    <CategoryCard title="Electronics" img={mobile} background='#F4DBA4'/>
    <CategoryCard title="Kitchen appliances" img={pic} background='#F4DBA4'/>
    <CategoryCard title="Clothes" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="Skin care" img={cat2} background='#0034FF'/>
    <CategoryCard title="Electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="Electronics" img={mouse} background='#FF6262'/>
    <CategoryCard title="Electronics" img={mobile} background='#F4DBA4'/>
    <CategoryCard title="Kitchen appliances" img={pic} background='#F4DBA4'/>
    <CategoryCard title="Clothes" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="Skin care" img={cat2} background='#0034FF'/>
    <CategoryCard title="Electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="Electronics" img={mouse} background='#FF6262'/>
    <CategoryCard title="Electronics" img={mobile} background='#F4DBA4'/>
    <CategoryCard title="Kitchen appliances " img={pic} background='#F4DBA4'/>
    </Row>

    </Container>
  )
}
export default CategoryContainer
