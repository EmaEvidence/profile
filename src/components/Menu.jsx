import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const path = props.location.pathname;
  return(
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <span>
          <Link to="/">
            Profile
            <span className={(path === '/') ? "selected indicator" : 'indicator'}></span>
          </Link>
        </span>
        <span>
          <Link to="/skills">
            Skills
            <span className={(path === '/skills') ? "selected indicator" : 'indicator'}></span>
          </Link>
        </span>
        <span>
          <Link to="/projects">
            Projects
            <span className={(path === '/projects') ? "selected indicator" : 'indicator'}></span>
          </Link>
        </span>
        <span>
          <Link to="/connect">
            Connect
            <span className={(path === '/connect') ? "selected indicator" : 'indicator'}></span>
          </Link>
        </span>
      </div>
    </Fragment>
  );
};

export default Menu;
