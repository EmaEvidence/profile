import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <Fragment>
      <div>
        <span className="selected">
          <Link to="/">Profile</Link>
        </span>
      </div>
      <div>
        <span><Link to="/skills">Skills</Link></span>
        <span><Link to="/projects">Projects</Link></span>
        <span><Link to="/links">Links</Link></span>
      </div>
      <div>
        <span><Link to="/blogs">Blogs</Link></span>
        <span><Link to="/connect">Connect</Link></span>
      </div>
      <div>
        <span><Link to="/mentorship">Mentorship</Link></span>
      </div>
    </Fragment>
  );
};

export default Menu;
