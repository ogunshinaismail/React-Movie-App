import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <h2 className='logo'>MovieList</h2>
            <Link to="/">Home</Link>
        </nav>
    </div>
  )
}

export default Navbar