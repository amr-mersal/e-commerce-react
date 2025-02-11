import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";
import CategoryCard from '../Category/CategoryCard'
 const CategoryContainer = () => {
  return (
    <Container>
    <div className='admin-content-text mt-2  '>All Category</div>
    <Row className='my-2 d-flex justify-content-between'>
    <CategoryCard title="electronics" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={cat2} background='#0034FF'/>
    <CategoryCard title="electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={sale} background='#FF6262'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={cat2} background='#0034FF'/>
    <CategoryCard title="electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={sale} background='#FF6262'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={cat2} background='#0034FF'/>
    <CategoryCard title="electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={sale} background='#FF6262'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={cat2} background='#0034FF'/>
    <CategoryCard title="electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={sale} background='#FF6262'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={clothe} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={cat2} background='#0034FF'/>
    <CategoryCard title="electronics" img={labtop} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={sale} background='#FF6262'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    <CategoryCard title="electronics" img={pic} background='#F4DBA4'/>
    </Row>

    </Container>
  )
}
export default CategoryContainer
