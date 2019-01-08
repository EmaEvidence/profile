import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const path = props.location.pathname;
  return(
    <Fragment>
      <div>
        <span className={(path === '/') ? "selected" : ''}>
          <Link to="/">Profile</Link>
        </span>
        <span className={(path === '/skills') ? "selected" : ''}>
          <Link to="/skills">Skills</Link>
        </span>
        <span className={(path === '/projects') ? "selected" : ''}>
          <Link to="/projects">Projects</Link>
        </span>
        <span className={(path === '/connect') ? "selected" : ''}>
          <Link to="/connect">Connect</Link>
        </span>
      </div>
      <div>
        
      </div>
      <div>
        {/* <span className={(path === '/blogs') ? "selected" : ''}>
          <Link to="/blogs">Blogs</Link>
        </span> */}
        {/* <span className={(path === '/connect') ? "selected" : ''}>
          <Link to="/connect">Connect</Link>
        </span> */}
      </div>
      <div>
        {/* <span className={(path === '/mentorship') ? "selected" : ''}>
          <Link to="/mentorship">Mentorship</Link>
        </span> */}
      </div>
    </Fragment>
  );
};

export default Menu;
