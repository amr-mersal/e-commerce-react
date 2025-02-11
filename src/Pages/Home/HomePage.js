import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Discount from '../../Components/Home/Discount'
import BrandFeatured from '../../Components/Brand/BrandFeatured'

 const HomePage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title="Best Sellers" btntitle="See More" pathText="/products"/>
    <Discount/>
    <CardProductsContainer title="New arrivals" btntitle="See More" pathText="/products"/>
    <BrandFeatured title="Best Brands"  btntitle="See More"/>
    
    </div>
  )
}
export default HomePage
