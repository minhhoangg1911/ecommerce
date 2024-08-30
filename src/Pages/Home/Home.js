import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Item from '../../Components/Item/Item'
import Choose from '../../Components/Choose/Choose'
import Card from '../../Components/Card/Card'
import Blog from '../../Components/Blog/Blog'
import Chef from '../../Components/Chef/Chef'
import Top from '../../Components/Top/Top'

const Home = () => {
  return (
    <div style={{background:"#f8f7f2"}}>
        <Carousel />
        <Item />
        <Choose />
        <Card />
        <Blog />
        <Chef />
        <Top />
    </div>
  )
}

export default Home