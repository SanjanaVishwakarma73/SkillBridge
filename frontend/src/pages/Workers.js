import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get("search");

  useEffect(() => {
    API.get(`/workers?skill=${search || ""}`)
      .then((res) => setWorkers(res.data))
      .catch((err) => {
        console.error(err);
        setWorkers([]);
      });
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Workers</h2>

      {workers.length === 0 ? (
        <p>No workers found</p>
      ) : (
        workers.map((w) => (
          <div key={w._id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "10px"
          }}>
            <h3>{w.name}</h3>
            <p><b>Skills:</b> {w.skills?.join(", ")}</p>
            <p><b>Location:</b> {w.location}</p>
            <p style={{ color: "green" }}>
              ₹{w.rate}/hour
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Workers;