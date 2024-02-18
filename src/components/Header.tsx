import logo from "../assets/HoolaLogo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
