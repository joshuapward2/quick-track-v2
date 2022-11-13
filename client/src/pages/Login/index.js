import React from 'react';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

// imports from graphql and utils
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };


return(
    <div className="parentContainer">
    <div className="containerOne">
    <div className="card small">
        <div className="card-content">
            <span className="card-title">login</span>
            <form onSubmit={handleFormSubmit}>
                <Row className="row">
                    <div className="input-field col s6">
                        <div>
                        <label for="email-login">email:</label>
                        <input
                          className="form-input"
                         placeholder="Your email"
                         name="email"
                        type="email"
                         id="email"
                         value={formState.email}
                         onChange={handleChange}
                         />
                        </div>
                        <div>
                        <label for="password-login">password:</label>
                        <input
                        className="form-input"
                         placeholder="******"
                         name="password"
                         type="password"
                        id="password"
                         value={formState.password}
                         onChange={handleChange}
                         />
                        </div>
                        <div>
                        <Button className="add-btn btn-small blue z-depth-2" type="submit">login</Button>
                        </div>
                    </div>
                </Row>
            </form>
            {error && <div>Login failed</div>}
        </div>
    </div>
</div>
      
      
<div className="containerOne">
    <Card className="card">
        <div className="card-content">
            <span className="card-title">Create Account</span>
                <form className="signup-form">
                    <div>
                    <label for="username-signup">username:</label>
                    <input type="text" id="username-signup" />
                    </div>
                    <div>
                    <label for="email-signup">email:</label>
                    <input type="text" id="email-signup" />
                    </div>
                    <div>
                    <label for="password-signup">password:</label>
                    <input type="password" id="password-signup" />
                    </div>
                    <div>
                    <Button class="add-btn btn-small blue z-depth-2" type="submit">signup</Button>
                    </div>
                </form>
            </div>
    </Card>
</div>
</div>
   


)

};


export default Login;