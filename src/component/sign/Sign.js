import React from 'react'
import { Link } from 'react-router-dom'
import './Sign.css'
function Sign() {
  return (
  <>
  <div className="smain">
  <form >
	<h1>Sign In</h1>
	<label for="username">First Name:</label>
	<input type="text"  name="username" />
	<label for="username">Last Name:</label>
	<input type="text"  name="username" />
	<label for="username">Email:</label>
	<input type="text"  name="username" />
	<label for="password">Password:</label>
	<input type="password"  name="password" />
	<Link to='/'><input type="submit" value="Sign In" /></Link>
</form>
  </div>
  </>

  )
}

export default Sign
