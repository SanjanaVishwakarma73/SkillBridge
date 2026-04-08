import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#1e293b",
      color: "white"
    }}>
      <h2>SkillBridge</h2>

      <div>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/jobs" style={{ margin: "10px", color: "white" }}>Jobs</Link>
        <Link to="/workers" style={{ margin: "10px", color: "white" }}>Workers</Link>

        {/* NEW 👇 */}
        <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
        <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;