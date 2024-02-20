import { useState } from "react";
import logo from "../assets/HoolaLogo.png";

const Header = () => {
  const [btnName, updateBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
          <li>
            <button
              className="login-button"
              onClick={() =>
                btnName === "Login"
                  ? updateBtnName("Logout")
                  : updateBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
