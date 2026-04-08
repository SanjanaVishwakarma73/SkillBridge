import { useState } from "react";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await API.post("/users/login", form);

    alert("Login Success");
    console.log(res.data);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;