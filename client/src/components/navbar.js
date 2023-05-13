import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "../App.css";
function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    // reseting the cookies to logout.
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");

    // redirecting to auth page so that one can acces the page.
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">CreateRecipe</Link>
      <Link to="/saved-recipes">SavedRecipe</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> LOGOUT</button>
      )}
    </div>
  );
}
export default Navbar;
