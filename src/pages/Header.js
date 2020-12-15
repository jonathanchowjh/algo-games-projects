import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><span className="navbar-brand">Algorithmic Games</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/ab_tic_tac_toe">
                <span className="nav-link">Tic Tac Toe <span className="sr-only">(current)</span></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/astar_pathfinder">
                <span className="nav-link">Pathfinder</span>
              </Link>
            </li>
          </ul>
          <span className="nav-link" onClick={()=> window.open("https://jonathanchowjh.com", "_blank")}>
            Jonathan Chow
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Header