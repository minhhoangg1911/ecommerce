import React from 'react'
import Card from '../Card/Card'

const RelatedProducts = () => {
    return (
        <div className='container text-center mt-5 fw-bold fs-5' >
            <h1 style={{ fontSize: '50px', fontWeight: '600', fontFamily: 'League Gothic, sans-serif', letterSpacing: '0.2rem' }}>Related products</h1>
            <Card />
        </div>
    )
}

export default RelatedProducts