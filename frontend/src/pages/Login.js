import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", form);

      alert("Login Successful ✅");

      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/";

    } catch (err) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Login</button>
        </form>

        <p className="link-text">
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;