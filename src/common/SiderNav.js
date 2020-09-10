import React from "react";
import {Link} from "react-router-dom";
import '../styles/SiderNav.scss'

function SiderNav() {
  return(
    <nav className="sider-nav">
      <div className='sider-nav-link'>
        <div>
          <Link to="/">报道</Link>
        </div>
        <div>
          <Link to="/news">投稿</Link>
        </div>
        <div>
          <Link to="/news">融资</Link>
        </div>
      </div>
    </nav>
  )
}

export default SiderNav;