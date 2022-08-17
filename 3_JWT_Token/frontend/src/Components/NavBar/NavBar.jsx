import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import "./navbar.css";
import { logOutSuccess } from "../../redux/authSlice";

const NavBar = () => {
  const user = useSelector(state => state.auth.login?.currentUser);
  const dispath = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispath, logOutSuccess);
  const handleLogout = () => {
    logOut(dispath, navigate, user?.accessToken, axiosJWT, user?._id);
  }
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home"> Home </Link>
      {user? (
        <>
        <p className="navbar-user">Hi, <span> {user.username}  </span> </p>
        <Link to="/login" className="navbar-logout" onClick={handleLogout}> Log out</Link>
        </>
      ) : (    
        <>
      <Link to="/login" className="navbar-login"> Login </Link>
      <Link to="/register" className="navbar-register"> Register</Link>
      </>
)}
    </nav>
  );
};

export default NavBar;
