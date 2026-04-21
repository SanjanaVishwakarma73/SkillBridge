import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    username: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/signup", form);
      alert("User Registered ✅");
    } catch (err) {
      alert("Error registering user ❌");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="location" placeholder="Location" onChange={handleChange} required />
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="employee">Employee</option>
            <option value="employer">Employer</option>
          </select>

          <button type="submit">Register</button>

          <p className="link-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;