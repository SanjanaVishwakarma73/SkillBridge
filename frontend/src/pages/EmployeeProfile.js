import { useState } from "react";
import API from "../services/api";

function EmployeeProfile() {
  const [form, setForm] = useState({ skills: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/users/add", form);
    alert("Profile Saved!");
  };

  return (
    <div>
      <h2>Employee Profile</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})} />

        <input placeholder="Location"
          onChange={e => setForm({...form, location: e.target.value})} />

        <input placeholder="Skills (comma separated)"
          onChange={e => setForm({...form, skills: e.target.value.split(",")})} />

        <select onChange={e => setForm({...form, availability: e.target.value})}>
          <option>Select Availability</option>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
          <option value="full-day">Full Day</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EmployeeProfile;