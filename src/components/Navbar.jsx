import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/add">Add Interview</Link>
    </nav>
  );
}

export default Navbar;