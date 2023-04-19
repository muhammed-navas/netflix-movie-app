import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <>
  <div className="smain">
  <form >
	<h1>Log In</h1>
	<label for="username">Username:</label>
	<input type="text"  name="username" />
	<label for="password">Password:</label>
	<input type="password"  name="password" />
<Link to='/'>	<input type="submit" value="Log In" /></Link>
</form>
  </div>
  </>
  )
}

export default Login
