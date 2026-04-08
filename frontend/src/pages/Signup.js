import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/users/signup", form);
    alert("User Registered!");
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
        <input placeholder="Location" onChange={e => setForm({...form, location: e.target.value})} />
        <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

        <select onChange={e => setForm({...form, role: e.target.value})}>
          <option>Select Role</option>
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;