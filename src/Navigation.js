import React from 'react';
import {Link} from "react-router-dom";
import {pages} from "./App";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        {pages.map(page =>
          <li>
            <Link to={'/' + page}>
              {page}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
