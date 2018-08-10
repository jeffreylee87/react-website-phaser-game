import React, {Component} from "react";
import { Link,  Redirect } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {

  logOutBtn = event => {
    localStorage.clear();
    
  }

  render() {
    if (!localStorage.getItem("user-loggedIn")) {
      return <Redirect to='/' />
    }
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Ludum
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/game"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/game" className="nav-link">
            Game
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/leaderboard"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </li>
      </ul>
    </div>
    {localStorage.getItem("user-loggedIn") ? (
    <Link onClick={this.logOutBtn}   to="/game">Log Out</Link>):(
      <Link to="/">Log In</Link>
    )}
  </nav>
);
}
}

export default Navbar;
// const Navbar = props => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       Ludum
//     </Link>
//     <div>
//       <ul className="navbar-nav">
//         <li
//           className={
//             window.location.pathname === "/about"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/game"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/game" className="nav-link">
//             Game
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/leaderboard"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/leaderboard" className="nav-link">
//             Leaderboard
//           </Link>
//         </li>
//       </ul>
//     </div>
//     {localStorage.getItem("user-loggedIn") ? (
//     <Link to="/game">Log Out</Link>):(
//       <Link to="/">Log In</Link>
//     )}
//   </nav>
// );



