import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return(
    <nav>
      <h2>汉中创客</h2>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/news">交流</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;