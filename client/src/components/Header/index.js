import React from 'react';

//importing and destructuring link from react-router
import {Link} from 'react-router-dom';



function Header() {
return (
<header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
       
        <nav className="text-center">
            <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/diet">Diet</Link>
        </nav>
      </div>
    </header>

)

}

export default Header;