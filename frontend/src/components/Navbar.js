import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#333", color: "white" }}>
      <h2>SkillBridge</h2>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/jobs" style={{ margin: "10px", color: "white" }}>Jobs</Link>
      <Link to="/workers" style={{ margin: "10px", color: "white" }}>Workers</Link>
    </nav>
  );
}

export default Navbar;