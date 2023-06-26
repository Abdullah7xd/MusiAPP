import React from 'react'
import { NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul2w0j1XeOiuEysHXwm6Q_STtwDvzMPtnFQ&usqp=CAU' height={44} alt="MDB Logo" loading="lazy" style={{ marginTop: 2 }} />

    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Music
          
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Premium
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav