import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/logo.png";
import logoFb from "../../assets/logo_fb.svg";

export default class Login extends Component {
  render() {
    return (
      <div className="login__wrap">
        <div className="login-content__wrap">
          <div className="login-content__img">
            <img src={logo} alt="logo" />
          </div>

          <div>
            <button className="btn__social">
              <img src={logoFb} alt="" />
              <span>Log in with Facebook</span>
            </button>
          </div>

          <div className="line-or">
            <span className="line-or__line" />
            <span className="line-or__or">Or</span>
            <span className="line-or__line" />
          </div>

          <form>
            <div className="input-custom">
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="input-custom">
              <input type="text" placeholder="Full name" />
            </div>
            <div className="input-custom">
              <input type="text" placeholder="User name" />
            </div>
            <div className="input-custom">
              <input type="password" placeholder="Password" />
            </div>

            <div className="login-content__btn">
              <button className="btn btn--primary" disabled>
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy
          </div>
        </div>

        <div className="acount__status">
          <p>
            Have an account?
            <Link to="/login"> Log in</Link>
          </p>
        </div>

        <div className="get-app">
          <p>Get the app.</p>

          <div className="get-app__icon">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="App store" />
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Google store" />
          </div>
        </div>
      </div>
    );
  }
}
