
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';



//Materialize import
import { Button, Card, Row, Col } from 'react-materialize';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return(
<div className="containerOne">
    <Card className="card">
        <div className="card-content">
            <span className="card-title center-align">Create Account</span>
            <form onSubmit={handleFormSubmit}>
                    <div>
                      <h6><label htmlFor="username-signup" className="white-text bold">Username:</label></h6>
                    <input
                   className="form-input"
                   placeholder="Your username"
                   name="username"
                   type="text"
                   id="username"
                   value={formState.username}
                   onChange={handleChange}
                  />
                    </div>
                    <div>
                    <label htmlFor="email-signup" className="white-text">Email:</label>
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
                    <label htmlFor="password-signup" className="white-text">Password:</label>
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
                    <Button className="btn waves-effect waves-light purple" type="submit">signup</Button>
                    </div>
                </form>
                {error && <div>Signup failed</div>}
            </div>
    </Card>
</div>



  )
}


export default Signup
