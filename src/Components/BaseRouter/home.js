import React from 'react'
import Header from '../Header/Header'
import { Route  } from 'react-router-dom'
import Footer from '../Footer/Footer'

export const BaseHomeLayout = ({ path, element }, index) => {
    return (
        <Route key={index} path={path} element={
            <>
                <Header />
                {element}
                <Footer />
            </>
        } />
    )
}


