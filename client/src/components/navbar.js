import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">CreateRecipe</Link>
      <Link to="/saved-recipes">SavedRecipe</Link>
      <Link to="/auth">Login/Register</Link>
    </div>
  );
}
export default Navbar;
