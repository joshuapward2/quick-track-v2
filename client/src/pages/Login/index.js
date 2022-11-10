import React from 'react';

function Login () {
return(
    <div className="parentContainer">
     <div className="containerOne">
    <div className="card small">
        <div className="card-content">
            <span className="card-title">login</span>
                <form action="" class="login-form col">
                    <div className="row">
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
                            <button className="add-btn btn-small blue z-depth-2" type="submit">login</button>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    </div>
</div>
      
      
<div className="containerOne">
    <div className="card">
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
                    <button class="add-btn btn-small blue z-depth-2" type="submit">signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
   


)

}

export default Login;