import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    // <div>
    //    <ul className="abd">
    //     <li><NavLink to="/">Product</NavLink></li>
    //     <li><NavLink to="/add">Add Product</NavLink></li>
    //     <li><NavLink to="/update">Update Product</NavLink></li>
    //     <li><NavLink to="/logout">Logout</NavLink></li>
    //     <li><NavLink to="/profile">Profile</NavLink></li>
    //     <li><NavLink to="/signup">Signup</NavLink></li>
    //    </ul>
    // </div>

    <>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HnLTtcmBoJN06_7MT9AYnDcnVprhSQf-ow&usqp=CAU"
                  height={45}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/update">
                    Update Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addmusic">
                    Add Music
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
            </div>

          </div>

        </nav>

      </>
    </>

  )
}

export default Nav