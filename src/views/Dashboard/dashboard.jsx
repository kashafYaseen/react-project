import React from "react";
import Header from "../../components/Header/header";
import LeftSidebar from "../../components/LeftSidebar/leftSidebar";
import "../../scss/dashboard.scss";
import RightSidebar from "../../components/RightSidebar/rightSidebar";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-background">
        <Header />
        <LeftSidebar />
        <RightSidebar />
      </div>
    </>
  );
};

export default Dashboard;
