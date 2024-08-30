import React from 'react'
import Card from './Card/Card'
import './style.css'
import Rate from './Rate/Rate'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts'
const Details = () => {
  return (
    <div className='details'>
        <Card />
        <Rate/>
        <RelatedProducts />
    </div>
  )
}

export default Details