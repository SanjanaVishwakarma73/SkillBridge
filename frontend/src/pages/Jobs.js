import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid", margin: "10px" }}>
          <h3>{job.title}</h3>
          <p>Skill: {job.skillRequired}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;