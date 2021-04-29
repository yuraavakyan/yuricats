import "./navbar.scss";
import catLogo from "../../img/wool-ball.png";
import { resetCategory } from "../../storeModifyingFunctions/Categories";
import AnimatedButton from './components/animatedButton/AnimatedButton';
import { useSelector } from "react-redux";
import { setSidebarStatus } from "../../storeModifyingFunctions/setSidebarStatus";
import Settings from "../settings/Settings";

const Navbar = () => {
  const { sidebarActive, firstLoad } = useSelector((state) => state);

  const handleResetClick = () => {
    resetCategory();
    setSidebarStatus(false);
  };

  const handleSideClick = (event) => {
    sidebarActive ? setSidebarStatus(false) : setSidebarStatus(true);
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo-part" onClick={handleResetClick}>
          <div className="logo-pic">
            <img src={catLogo} alt=""></img>
          </div>

          <div className="logo">CatPics</div>
        </div>
        {firstLoad ? (
          ""
        ) : (
          <div className="nav-links">
            <Settings class="settings-nav" />
            <AnimatedButton class="nav-animated" />
            <div
              style={{ display: firstLoad ? "none" : "" }}
              className={`burger ${sidebarActive ? "open" : ""}`}
              onClick={handleSideClick}
            >
              <div className="burger-line"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
