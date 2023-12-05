import React from 'react'
import ProductCarousel from '../components/home/product-carousel';

function Home() {  
  return (
    <div className="home">
      <div className="home-title">Prodotti</div>
      <div className='home-carousel'>
        <ProductCarousel />
      </div>
    </div>
  )
}

export default Home