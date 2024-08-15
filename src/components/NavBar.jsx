import { NavLink } from "react-router-dom";
import "./NavBar.css";

// const NavLink = ({ to, children }) => {
//     return (
//         <NavLink
//             className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//             to={to}
//         >
//             {children}
//         </NavLink>
//     );
// };

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/weather">Weather</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
