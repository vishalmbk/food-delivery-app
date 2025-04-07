import { APP_LOGO_URL } from "../utils/Constant";

const Header = () => {
  return (
    <>
      <header>
        <img className="app-logo" src={APP_LOGO_URL} />
        <input className="search"></input>
        <nav>
          <ul className="nav-list">
            <li>Menu</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Parteners</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
