import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/rightSidebar.scss";
import searchIcon from "../../assets/search.svg";
import Card from "../../components/Card/card.jsx";
import bars from "../../assets/images/bar-icon.png";

const RightSidebar = () => {
  const inputStyle = {
    backgroundImage: `url(${searchIcon})`,
    backgroundSize: "12px 12px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "7px center",
    paddingLeft: "28px",
  };

  const assign_tasks = [
    {
      name: "Warren Craig",
      shift: "Today : 10:00AM - 4:00PM",
    },
    {
      name: "Warren Craig",
      shift: "Today : 10:00AM - 4:00PM",
    },
    {
      name: "Warren Craig",
      shift: "Today : 10:00AM - 4:00PM",
    },
    {
      name: "Warren Craig",
      shift: "Today : 10:00AM - 4:00PM",
    },
    {
      name: "Warren Craig",
      shift: "Today : 10:00AM - 4:00PM",
    },
  ];

  const active_drivers = [
    {
      name: "Warren Craig",
      shift: "2/2 Tasks active",
    },
    {
      name: "Warren Craig",
      shift: "2/2 Tasks active",
    },
    {
      name: "Warren Craig",
      shift: "2/2 Tasks active",
    },
    {
      name: "Warren Craig",
      shift: "2/2 Tasks active",
    },
    {
      name: "Warren Craig",
      shift: "2/2 Tasks active",
    },
  ];

  return (
    <div className="right-sidebar-container">
      <div className="offcanvas offcanvas-end show">
        <div className="offcanvas-body col-12">
          <Tabs>
            <div className="row">
              <TabList className="custom-tab-list">
                <Tab className="custom-tab">Active Drivers</Tab>
                <Tab className="custom-tab">Assign Task</Tab>
                <Tab className="custom-tab">Create Shift</Tab>
              </TabList>
            </div>

            <div className="row mx-2">
              <div className="col-md-10">
                <div className="form">
                  <input
                    type="text"
                    className="form-input-height form-control form-input"
                    style={inputStyle}
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="col-md-2">
                <button className="toggle-button">
                  <img src={bars} className="bar-icon"></img>
                  {/* <FontAwesomeIcon icon={faBars} className="icon-color" /> */}
                </button>
              </div>
            </div>

            <TabPanel>
              {active_drivers.map((task, index) => (
                <Card key={index} task={task} showPlus={false} />
              ))}
            </TabPanel>
            <TabPanel>
              {assign_tasks.map((task, index) => (
                <Card key={index} task={task} show={true} />
              ))}
            </TabPanel>
            <TabPanel>
              {assign_tasks.map((task, index) => (
                <Card key={index} task={task} />
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
