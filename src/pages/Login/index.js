import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import { createWalletAction } from "../../store/slice/authSlice";
import bcrypt from 'bcryptjs';
import Spinner from "react-bootstrap/Spinner";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  // console.log("words", words);
  // console.log(localStorage)

  const loginHandler = () => {
    let savedPassword = localStorage.getItem('password');
    bcrypt.compare(password, savedPassword)
      .then(isCorrect => {
        if (isCorrect) {
          // console.log('mnemonics', localStorage?.getItem('mnemonics'))
          dispatch(
            createWalletAction({
              params: JSON.parse(localStorage?.getItem('mnemonics')),
              password: password,
              cb: (err, response) => {
                if (err) {
                  console.log("err", err);
                }
                if (response) {
                  navigate(routes.dashboardPage);
                }
              }
            })
          )
        } else {
          setErr('Wrong password!');
        }
      });
  }

  let loader = useSelector((state) => state.auth.loader);
  if (loader)
    return (
      <div><Spinner animation="border" variant="primary" /></div>
    );
  return (
    <section className="zl_login_section">
      <div className="zl_login_content container">
        <div className="zl_login_heading_text">
          <h3 className="zl_login_heading">Login</h3>
          <p className="zl_login_peregraph">
            Login De-crypto app with your secret words.
          </p>
        </div>

        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErr(''); }}></input>
        {err}
        <div className="zl_login_btn">
          <button
            className="mx-auto zl_login_btn_link"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
        <Link to={routes.signupPage}>Create new wallet</Link>
      </div>
    </section>
  );
};

export default LogIn;
