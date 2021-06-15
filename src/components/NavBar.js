import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget.js';

export function NavBar (){
  return (
    <div>
      <h1>Home Menu</h1>
      <nav class="nav nav-tabs">
      <a href="././public/index.html" class="navbar-brand">  🍪
      </a>
      <ul>
        <li class="nav-item">
          <a href="././public/index.html">Premezclas</a>
        </li>
        <li class="nav-item">
          <a href="././public/index.html" class="nav-link">Chocolates</a>
        </li>
        <li class="nav-item">
          <a href="././public/index.html"class="nav-link">Rellenos</a>
        </li>
        <li class="nav-item">
          <a href="././public/index.html" class="nav-link">Confites</a>
        </li>
        <li class="nav-item">
          <a href="././public/index.html" class="nav-link">Condimentos</a>
        </li>
        <li class="nav-item">
          <a href="././public/index.html" class="nav-link">Saborizantes.</a>
        </li>
      </ul>
      <CartWidget/>
      </nav>
    </div>

  )

}
;
