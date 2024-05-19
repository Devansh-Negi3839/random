import React, { useState } from "react";
import "./styles/DashboardScreen.css";
import SideBar from "../../Common/SideBar";
import { useSelector } from "react-redux";
import BreadCrumbsContainer from "../../Common/Breadcrumbs";

export default function MyflowScreen() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="dashboardOuterContainer">
      <SideBar />
      <div
        className={`${
          sidebar.expand
            ? "dashboardInnerSidebarBig"
            : "dashboardInnerSidebarSmall"
        }`}
      >
        <BreadCrumbsContainer />
        <div className="dashboardDataCardContainer">
          <h1> all the flows are to used here and can use this code in map function to make it iterable for all the data </h1>
        </div>
      </div>
    </div>
  );
}
