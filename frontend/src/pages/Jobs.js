import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => {
        console.error(err);
        setJobs([]);
      });
  }, []);

  // ✅ APPLY FUNCTION
  const handleApply = async (jobId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // ❌ not logged in
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await API.post("/applications", {
        userId: user._id,
        jobId,
      });

      // ✅ update UI (no alert)
      setAppliedJobs((prev) => [...prev, jobId]);

    } catch (err) {
      // if already applied
      if (err.response?.data?.message === "Already applied") {
        setAppliedJobs((prev) => [...prev, jobId]);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid #ddd",
              margin: "15px 0",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{job.title}</h3>
            <p><b>Skill:</b> {job.skillRequired}</p>
            <p><b>Location:</b> {job.location}</p>

            <h4 style={{ color: "green" }}>
              ₹{job.salary}/hour
            </h4>

            {/* ✅ APPLY BUTTON */}
            <button
              onClick={() => handleApply(job._id)}
              disabled={appliedJobs.includes(job._id)}
              style={{
                padding: "8px 15px",
                background: appliedJobs.includes(job._id) ? "gray" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              {appliedJobs.includes(job._id) ? "Applied" : "Apply"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Jobs;