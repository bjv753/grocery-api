import React from 'react'

export default function Navbar(props){
  const { logout } = props
  return (
    <div id="navbar">
      <div onClick={logout}>Logout</div>
    </div>
  )
}