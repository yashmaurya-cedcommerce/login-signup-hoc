import React, { ComponentType } from 'react'
import Footer from './Footer'
import Header from './Header'


function hocFunc <T>(Component: ComponentType<T>) {
    return (props: T & {}) => {
        return (
            <div>
                <Header />
                <Component value='abc' ID={123} {...props} />
                <Footer />
            </div>
        )
    }
}

export default hocFunc
