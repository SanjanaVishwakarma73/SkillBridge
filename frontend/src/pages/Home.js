import { useState } from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Find Skilled Workers Near You</h1>

        <input
          placeholder="Search (plumber, electrician...)"
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />

        <button style={{ padding: "10px", marginLeft: "10px" }}>
          Search
        </button>
      </div>

      {/* MAP SECTION */}
      <div style={{ marginTop: "40px", padding: "20px" }}>
        <h2>Nearby Workers Map</h2>
        <Map />
      </div>
    </div>
  );
}

export default Home;