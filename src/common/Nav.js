import React from "react";
import {Link} from "react-router-dom";
import { Input } from 'antd';
import '../styles/Nav.scss'

const { Search } = Input;

function Nav() {
  return(
    <nav className="nav">
      <span className="nav-title">HANZHONGMAKER</span>
      <div className='nav-link'>
        <span>
          <Link to="/news">资讯</Link>
        </span>
        <span>
          <Link to="/jiao">交流</Link>
        </span>
        <span>
          <Link to="/zhuan">专题</Link>
        </span>
        <span>
          <Link to="/huo">活动</Link>
        </span>
      </div>
      <Search
        className="nav-search"
        placeholder="搜素"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </nav>
  )
}

export default Nav;