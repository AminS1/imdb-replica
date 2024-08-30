import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Tab } from "../../utils/types";
import { NavLink } from "react-router-dom";

interface IProps {
  tabs: Tab[];
}

const Header: React.FC<IProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={classes.header}>
      {tabs.map((tab: Tab, index: number) => (
        <NavLink
          className={({ isActive }) => {
            isActive && setActiveTabIndex(index);
            return `${classes.tab} ${isActive ? classes.activeTab : ""}`;
          }}
          to={tab.path}
        >
          {tab.title}
        </NavLink>
      ))}
      <div
        className={classes.activeTabIndicator}
        style={{ marginLeft: `${activeTabIndex * 8 + "rem"}` }}
      />
    </div>
  );
};

export default Header;
