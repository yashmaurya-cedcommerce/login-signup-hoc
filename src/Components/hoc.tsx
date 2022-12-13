import React, { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    value: string;
    ID: number
};

const hocFunc = (Component: FC<Props>): FC => {
    return () => {
        return (
            <div>
                <Header />
                <Component value='abc' ID={123} />
                <Footer />
            </div>
        )
    }
}

export default hocFunc
