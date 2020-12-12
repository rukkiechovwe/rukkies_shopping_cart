import React from "react";
import "../styles.css";
function UserLogin() {

    return (
        <div className="sign-in">
            <div class="login-page">
                <form class="col-vm">
                    <h2>Login</h2>
                    <div className="container-login col-vm">
                        <input type="text" name="id" placeholder="Enter Email" />
                    </div>
                    <div className="container-login col-vm">
                        <input type="password" name="Password" placeholder="Enter Password" />
                    </div>
                    <div class="container-login col-vm">
                        <button class="btn">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserLogin
