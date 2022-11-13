import React from 'react';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

function Login () {

    return(
    <div className="parentContainer">
    <div className="containerOne">
    <div className="card small">
        <div className="card-content">
            <span className="card-title">login</span>
            <form action="" class="login-form col">
                <Row className="row">
                    <div className="input-field col s6">
                        <div>
                        <label for="email-login">email:</label>
                        <input type="text" id="email-login" />
                        </div>
                        <div>
                        <label for="password-login">password:</label>
                        <input type="password" id="password-login" />
                        </div>
                        <div>
                        <Button className="add-btn btn-small blue z-depth-2" type="submit">login</Button>
                        </div>
                    </div>
                </Row>
            </form>
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
}

export default Login;