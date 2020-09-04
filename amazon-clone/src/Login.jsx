import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setemail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setpassword(event.target.value)}
            value={password}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Vision's terms and conditions. We do not
          have a Privacy Notice, we don't need one. We don't use cookies, cause
          no one will visit our website for sure. Anyway. Happy Shopping!
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Vision Account
        </button>
      </div>
    </div>
  );
}

export default Login;
