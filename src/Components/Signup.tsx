import React from 'react'
import hocFunc from './hoc'

function Signup(props: any):JSX.Element {
    return (
        <div className='home-container'>Signup</div>
    )
}

export default hocFunc(Signup)
