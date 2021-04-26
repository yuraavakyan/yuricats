import "./styles.scss";
import catLogo from "../../img/wool-ball.png";
import resetCategory from "../../api/resetCategory";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { useSelector } from "react-redux";
import { setSidebarStatus } from "../../api/setSidebarStatus";

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

        <div className="nav-links">
          <div
            className="nav-link"
            style={{ display: firstLoad ? "none" : "" }}
          >
            <AnimatedButton class="nav-animated" />
          </div>
          <div
            style={{ display: firstLoad ? "none" : "" }}
            className={`burger ${sidebarActive ? "open" : ""}`}
            onClick={handleSideClick}
          >
            <div className="burger-line1"></div>
            <div className="burger-line2"></div>
            <div className="burger-line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
