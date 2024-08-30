import React from 'react'

const Item = () => {
    return (
        <div className='container d-flex justify-content-between' style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className='row'>
                <img className='col-12 col-sm-3 p-2' src='https://cbx-prod.b-cdn.net/COLOURBOX41406222.jpg?width=1200&height=1200&quality=70' width="100px" style={{ borderRadius: '20px' }} alt='' />
                <img className='col-12 col-sm-3 p-2' src='https://cbx-prod.b-cdn.net/COLOURBOX35962005.jpg?width=800&height=800&quality=70' width="100px" style={{ borderRadius: '20px,' }} alt='' />
                <img className='col-12 col-sm-3 p-2' src='https://cbx-prod.b-cdn.net/COLOURBOX34813031.jpg?width=1200&height=1200&quality=70' width="100px" style={{ borderRadius: '20px' }} alt='' />
                <img className='col-12 col-sm-3 p-2' src='https://cbx-prod.b-cdn.net/COLOURBOX41960411.jpg?width=1200&height=1200&quality=70' width="100px" style={{ borderRadius: '20px' }} alt='' />
            </div>
        </div>
    )
}

export default Item