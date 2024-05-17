import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="body" />
      </div>
      <form className='absolute p-12 bg-black w-3/12 flex flex-col justify-center items-center my-36 mx-auto right-0 left-0 text-white rounded-sm'>
        <h1 className='font-bold text-white pr-56 text-3xl w-full'>Sign&nbsp;In</h1>
        <input type="text" placeholder='Email Address' className='p-3 m-2 w-full bg-gray-800 border border-solid border-slate-400 rounded'/>
        <input type="password" placeholder='Password' className='p-3 m-2 w-full bg-gray-800 border border-solid border-slate-400 rounded'/>
        <button className='p-4 m-4 bg-red-600 text-white w-full font-bold'>Sign In</button>
      </form>
    </div>
    

  )
}

export default Login