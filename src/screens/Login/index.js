import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.scss";

import logo from "../../assets/logo.png";
import logoFb from "../../assets/logo_fb.svg";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUserName(event) {
    setUserName(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault();

    try {
      await axios({
        url: "https://api-clone-instagram.herokuapp.com/login",
        method: "post",
        data: {
          user_name: userName,
          password: password,
        },
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login__wrap">
      <div className="login-content__wrap">
        <div className="login-content__img">
          <img src={logo} alt="logo" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-custom">
            <input
              type="text"
              value={userName}
              onChange={handleChangeUserName}
              placeholder="Phone number, username, or email"
            />
          </div>
          <div className="input-custom">
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="Password"
            />
          </div>

          <div className="login-content__btn">
            <button className="btn btn--primary" type="submit">
              Log In
            </button>
          </div>
        </form>

        <div className="line-or">
          <span className="line-or__line" />
          <span className="line-or__or">Or</span>
          <span className="line-or__line" />
        </div>

        <div>
          <button className="btn__social">
            <img src={logoFb} alt="" />
            <span>Log in with Facebook</span>
          </button>
        </div>

        <div className="text-center">
          <Link to="/"> Forgot password?</Link>
        </div>
      </div>

      <div className="acount__status">
        <p>
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </div>

      <div className="get-app">
        <p>Get the app.</p>

        <div className="get-app__icon">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt="App store"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt="Google store"
          />
        </div>
      </div>
    </div>
  );
}
