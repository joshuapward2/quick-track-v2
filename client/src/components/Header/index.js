import React from 'react';

//importing and destructuring link from react-router
import {Link} from 'react-router-dom';


function Header() {
return (
//<header className="bg-secondary mb-4 py-2 flex-row align-center">
//      <div className="container flex-row justify-space-between-lg justify-center align-center">
//        
//       
//        <nav className="text-center">
//            
//          <Link to="/">Login</Link>
//          <Link to="/home">Home</Link>
//          <Link to="/diet">Diet</Link>
//          <h2>Hello World!</h2>
//        </nav>
//      </div>
//    </header>
<nav>
    <div className="nav-wrapper">
      <div className="brand-logo center"><i class="fa-solid fa-hippo fa-lg fa-flip"></i></div>
      {/* <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a> */}
      <ul className="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/diet">Diet</a></li>
        <li><a href="/Signup">Signup</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
       {/* <ul class="side-nav" id="mobile-demo"> */}
         {/* <li><a href="sass.html">Sass</a></li> */}
         {/* <li><a href="badges.html">Components</a></li> */}
         {/* <li><a href="collapsible.html">Javascript</a></li> */}
         {/* <li><a href="mobile.html">Mobile</a></li> */}
       {/* </ul> */}
    </div>
  </nav>

)

}

export default Header;