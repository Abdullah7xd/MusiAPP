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
          <div className="container-fluid ps-0">
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
                  src="data:image/png;base64,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"
                  height={48}
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
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addmusic">
                    Add Music
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/musiclisting">
                    Browse Music
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