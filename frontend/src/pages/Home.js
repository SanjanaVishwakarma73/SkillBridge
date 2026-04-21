import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Map from "../components/Map";

function Home() {
  const [search, setSearch] = useState("");
  const [workers, setWorkers] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await API.get(`/workers?skill=${search}`);
      setWorkers(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching workers");
    }
  };

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Find Skilled Workers Near You</h1>

        <input
          value={search}
          placeholder="Search (plumber, electrician...)"
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />

        <button
          onClick={handleSearch}
          style={{ padding: "10px", marginLeft: "10px" }}
        >
          Search
        </button>
      </div>

      {/* ✅ SEARCH RESULTS */}
      <div style={{ padding: "20px" }}>
        {workers.length === 0 ? (
          <p>No workers found</p>
        ) : (
          workers.map((worker) => (
            <div
              key={worker._id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{worker.name}</h3>
              <p><b>Skill:</b> {worker.skills}</p>
              <p><b>Location:</b> {worker.location}</p>
              <p style={{ color: "green" }}>
                ₹{worker.rate}/hour
              </p>
            </div>
          ))
        )}
      </div>
        
      {/* MAP */}
      <div style={{ marginTop: "40px", padding: "20px" }}>
        <h2>Nearby Workers Map</h2>
        <Map />
      </div>
    </div>
  );
}

export default Home;