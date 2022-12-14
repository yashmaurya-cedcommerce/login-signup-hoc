import React from 'react'
import hocFunc from './hoc'

function Login(props: any): JSX.Element {
  console.log(props)

  return (
    <div className=''>
      Login
      {props.keys?.map((item:string) => {
        return <>
          <p>{item}: {props[item]}</p>
        </>
      })}
    </div>
  )
}

export default hocFunc(Login)
