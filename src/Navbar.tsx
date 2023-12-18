import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/movies">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
    );
}
 
export default Navbar;