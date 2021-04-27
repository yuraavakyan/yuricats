import "./navbar.scss";
import catLogo from "../../img/wool-ball.png";
import { resetCategory } from "../../api/getCategories";
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
        {firstLoad ? 
          ""
         : 
          <div className="nav-links">
            <AnimatedButton class="nav-animated" />
            <div
              style={{ display: firstLoad ? "none" : "" }}
              className={`burger ${sidebarActive ? "open" : ""}`}
              onClick={handleSideClick}
            >
              <div className="burger-line"></div>
            </div>
          </div>
          
        }
        
        </div>
      
    </nav>
  );
};

export default Navbar;
