import { useState, useEffect } from "react";
import logo from "../../assets/images/Karibu.png";
import profilePic from "../../assets/images/profile.jpeg";
import { AiFillCaretDown } from "react-icons/ai";
import { faPlus, faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/header.scss";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Tasks", "Manage", "Schedule"];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const tabElements = document.querySelectorAll(".active-link");
    tabElements.forEach((tabElement, index) => {
      setBorderWidth(tabElement, index);
    });
  }, [activeTab]);

  const setBorderWidth = (tabElement) => {
    const tabText = tabElement.getAttribute("data-text");
    const borderWidth = `${tabText.length * 12}px`;
    tabElement.style.setProperty("--border-width", borderWidth);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div className="col-12 col-md-4">
            <a
              className="navbar-brand"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarExample01"
            >
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>

          <div className="col-12 col-md-4 tab-switcher">
            {tabs.map((tab, index) => (
              <span
                id="dynamic-border"
                key={index}
                data-text={tab}
                className={`${
                  index === activeTab
                    ? "mx-4 active-link "
                    : "mx-4 non-active-link"
                }`}
                onClick={() => handleClick(index)}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="col-12 col-md-4">
            <div className="d-flex flex-row-reverse mt-2 bd-highlight">
              <div className="p-2 bd-highlight">
                <button className="img-dropdown-button">
                  <AiFillCaretDown />
                </button>
              </div>
              <div className="p-2 bd-highlight text-height">
                <b>Austin</b> <br />
                <span className="sr-admin-text">Sr. Admin</span>
              </div>
              <div className="p-1 mx-2 bd-highlight">
                <button className="img-dropdown-button">
                  <img
                    className="rounded-full-img"
                    src={profilePic}
                    alt="Profile"
                  />
                </button>
              </div>
              <div className="p-2 mx-2 bd-highlight">
                <button className="bell-icon-button notification-container">
                  <FontAwesomeIcon icon={faBell} className="icon-color" />
                  <div className="notification-badge"></div>
                </button>
              </div>
              <div className="p-2 mx-2 bd-highlight">
                <button className="gear-icon-button">
                  <FontAwesomeIcon icon={faGear} className="icon-color" />
                </button>
              </div>
              <div className="p-2 mx-4 bd-highlight">
                <button className="custom-button">
                  <FontAwesomeIcon icon={faPlus} className="new-icon" />
                  New
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
