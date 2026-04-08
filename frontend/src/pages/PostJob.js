import { useState } from "react";
import API from "../services/api";

function PostJob() {
  const [job, setJob] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/jobs/add", job);
    alert("Job Posted!");
  };

  return (
    <div>
      <h2>Post a Job</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Job Title"
          onChange={e => setJob({...job, title: e.target.value})} />

        <input placeholder="Required Skill"
          onChange={e => setJob({...job, skillRequired: e.target.value})} />

        <input placeholder="Location"
          onChange={e => setJob({...job, location: e.target.value})} />

        <input placeholder="Salary"
          onChange={e => setJob({...job, salary: e.target.value})} />

        <select onChange={e => setJob({...job, timeRequired: e.target.value})}>
          <option>Select Time</option>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
          <option value="full-day">Full Day</option>
        </select>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;