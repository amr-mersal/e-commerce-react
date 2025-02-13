import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitlty/Pagination';
import prod1 from "../../Images/prod1.png";
import mouse from "../../Images/mouse.png";
import mobile from '../../Images/mobile1.png'
 const UserFavoriteProducts = () => {
  return (
    <div>
    <div className="admin-content-text pb-4"> My Favorite</div>
    <Row className='justify-content-start'>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge " price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical " price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge " price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical " price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge " price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical " price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge " price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical " price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    <ProductCard title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge " price='$ 900' rate='4.5' img={prod1}/>
    <ProductCard title="Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical " price='$ 150' rate='4' img={mouse}/>
    <ProductCard title="Apple iPhone X, 64GB Unlocked - Gray" price='$ 800' rate='4.2' img={mobile}/>
    </Row>
    <Pagination />
</div>
  )
}
export default UserFavoriteProducts
