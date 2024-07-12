import React from 'react'
import Button from './Button'

const SignInCard = () => {
  return (
    <div className='sign-in-card'>
      <div className='heading' aria-roledescription='header'>
        <h3>Welcome~~</h3>
        <p>Sign in for the best experience</p>
      </div>
      <Button class="primary-button" value="Register" />
      <Button class="secondary-button" value="Login" />
    </div>
  )
}

export default SignInCard