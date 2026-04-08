import { useState } from "react";
import API from "../services/api";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      alert("Login Success");
      console.log(res.data);
    } catch (err) {
      alert("Login failed.");
    }
  };

  return (
    <div className="sb-page-wrapper">
      <div className="sb-main-card">
        
        {/* LEFT SIDE: BRANDING */}
        <div className="sb-branding-section">
          <div className="sb-branding-top">
            <p className="sb-tagline">Local services at your fingertips.</p>
            <h1 className="sb-title">Connect with <br/>skilled experts <br/>near you.</h1>
            <div className="sb-visual-box">
              <div className="sb-floating-card">
                <span className="sb-icon">🔧</span>
                <p>Plumber nearby</p>
                <small>Available Now</small>
              </div>
            </div>
          </div>
          <div className="sb-branding-bottom">
             <span className="sb-dot">●</span> SkillBridge
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="sb-form-section">
          <div className="sb-top-nav">
            <button className="sb-text-btn">Sign Up</button>
          </div>

          <div className="sb-form-container">
            <h2 className="sb-form-heading">Sign In</h2>
            <form onSubmit={handleLogin} className="sb-login-form">
              <div className="sb-input-group">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={e => setForm({...form, username : e.target.value })}
                  required
                />
              </div>
              <div className="sb-input-group">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
              
              <a href="#" className="sb-forgot-link">Forgot password?</a>
              
              <button type="submit" className="sb-submit-btn">Sign In</button>
            </form>
          </div>

          <div className="sb-form-footer">
            <p>© 2026 SkillBridge Inc.</p>
            <div className="sb-footer-links">
              <a href="#">Contact Us</a>
              <span>English ▾</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;