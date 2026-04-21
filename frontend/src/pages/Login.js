import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", form);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ❌ remove alert (optional)
      // alert("Login Successful ✅");

      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid Email or Password ❌");
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
            value={form.email}
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={form.password}
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