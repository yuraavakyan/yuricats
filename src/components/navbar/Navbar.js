import "./styles.scss";
import catLogo from "../../img/wool-ball.png";
import resetCategory from "../../api/resetCategory";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { useSelector } from "react-redux";
import { setSidebarStatus } from "../../api/setSidebarStatus";

const Navbar = () => {
  const { sidebarActive } = useSelector((state) => state);

  const handleRefresh = () => {
    resetCategory();
  };

  const handleSideClick = (event) => {
    const burger =
      event.target.childNodes.length == 0
        ? event.target.parentNode
        : event.target;

    sidebarActive ? setSidebarStatus(false) : setSidebarStatus(true);
    if (!sidebarActive) {
      burger.classList.add("open");
    } else burger.classList.remove("open");
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo-part" onClick={handleRefresh}>
          <div className="logo-pic">
            <img src={catLogo} alt=""></img>
          </div>
          <div className="logo">Cat'sPic</div>
        </div>

        <div className="nav-links">
          <div className="nav-link">
            <AnimatedButton class="nav-animated" />
          </div>
          <div className="burger" onClick={handleSideClick}>
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
