import React from 'react';
import "./all.css";
export const Nav = () => {
  return( <nav className='navig'>
    <a className ='title' href='/'>Portfolio</a>
    <div className='menu'>
        <ul className='menuitems'>
            <li>
                <a href='#skillls'>Skills</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
    </nav>
  );
};
