import React from 'react';
import {Link} from "react-router-dom";

const links = [
  {pathname: '/first', state: {selectedPage: 0}, text: 'first'},
  {pathname: '/second', state: {selectedPage: 1}, text: 'second'},
  {pathname: '/third', state: {selectedPage: 2}, text: 'third'},
  {pathname: '/fourth', state: {selectedPage: 3}, text: 'fourth'},
  {pathname: '/fifth', state: {selectedPage: 4}, text: 'fifth'},
  {pathname: '/sixth', state: {selectedPage: 5}, text: 'sixth'}
  ];

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        {links.map(item =>
          <li>
            <Link to={item}>
              {item.text}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
