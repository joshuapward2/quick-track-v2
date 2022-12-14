
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
            <span className="card-title">Create Account</span>
            <form onSubmit={handleFormSubmit}>
                    <div>
                    <label htmlFor="username-signup">username:</label>
                    <input
                   className="form-input"
                   placeholder="Your username"
                   name="username"
                   type="username"
                   id="username"
                   value={formState.username}
                   onChange={handleChange}
                  />
                    </div>
                    <div>
                    <label htmlFor="email-signup">email:</label>
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
                    <label htmlFor="password-signup">password:</label>
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
                    <Button className="add-btn btn-small blue z-depth-2" type="submit">signup</Button>
                    </div>
                </form>
                {error && <div>Signup failed</div>}
            </div>
    </Card>
</div>



  )
}


export default Signup
