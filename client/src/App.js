import './App.css';
import React from 'react'
//importing pages
import Login from './pages/Login';
import Diet from './pages/Diet';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Signup from './components/Signup';
import Test from './pages/Test';

//importing apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// importing components
import Header from './components/Header';
import Footer from './components/Footer';

// Destructuring React-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
  
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
          <Route 
                path="/Test" 
                element={<Test />}
                />
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/"
              element={<Login />}
            />
             <Route 
                path="/signup" 
                element={<Signup />} 
              />
            <Route 
              path="/diet"
              element={<Diet />}
            />
            {/* {/*Below can be used if we want render a certain page using a username if we decide to} */}

             <Route path="/profile" element={<Profile />} />
              
           
             

           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
 
);
}

export default App;
