import './App.css';
//importing pages
import Login from './pages/Login';
import Diet from './pages/Diet';
import Home from './pages/Login';
// importing components
import Header from './components/Header';
import Footer from './components/Footer';

// Destructuring React-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
    
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/diet"
              element={<Diet />}
            />
            {/*Below can be used if we want render a certain page using a username if we decide to}

            {/* <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
             */}

           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
 
);
}

export default App;
