import React from 'react'
import { NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
       <ul className="abd">
        <li><NavLink to="/">Product</NavLink></li>
        <li><NavLink to="/add">Add Product</NavLink></li>
        <li><NavLink to="/update">Update Product</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
       </ul>
    </div>
  )
}

export default Nav