import Layout from "../../components/shared/Layout/Layout";
import "./SignIn.css";
import React, { useState } from "react";
import { signIn } from "../../services/user";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="page"></div>
      <div className="page-container">
        <h3>Sign In</h3>
        <div className="form-container">
          <form onSubmit={onSignIn}>
            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
          <div className="signup">
            <h4>Dont have an Account? Register</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
