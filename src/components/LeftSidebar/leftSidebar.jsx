import React from "react";
import { faBullhorn, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/leftSidebar.scss";
import speaker from "../../assets/images/speaker-icon.png";
import messageIcon from "../../assets/images/message-icon.png";

const LeftSidebar = () => {
  return (
    <div className="col-2">
      <div className="left-sidebar">
        <div className="left-sidebar-speaker-icon-div">
          {/* <FontAwesomeIcon
            icon={faBullhorn}
            className="icon-color-left-sidebar"
          /> */}
          <img src={speaker} className="speaker-icon" />
        </div>
        <div className="left-sidebar-text-icon-div">
          {/* <FontAwesomeIcon
            icon={faMessage}
            className="icon-color-left-sidebar"
          /> */}
          {/* <div className="text-notification-badge">3</div> */}
          <img src={messageIcon} className="speaker-icon" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
