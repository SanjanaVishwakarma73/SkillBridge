import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Workers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    API.get("/users").then((res) => setWorkers(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Available Workers</h2>

      {workers.map((w) => (
        <div key={w._id} style={{ border: "1px solid", margin: "10px" }}>
          <h3>{w.name}</h3>
          <p>Skills: {w.skills.join(", ")}</p>
          <p>Location: {w.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Workers;