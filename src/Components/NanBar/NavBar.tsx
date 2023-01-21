import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navBar'>
      <img className='navBar-avatar' src="../../../images/Mohammadjt2.png" alt="avatar" />
      <input className='navBar-input' type="text" placeholder='Start a discussion' />
    </div>
  )
}

export default NavBar