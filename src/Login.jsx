import React from 'react'

const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <form action="">
    <label htmlFor="username">Username</label>
    <input type="text" name="username" id="username" />
    <label htmlFor="password">Password</label>
    <input type="text" name="password" id="password" />
    <button>login</button>
    </form>
    </>
    
  )
}

export default Login
