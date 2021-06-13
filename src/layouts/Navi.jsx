import React from "react";
import { NavbarData } from "../static/NavbarData";
import { NavbarLogData } from "../static/NavbarLogData";
import { Link } from "react-router-dom";
import "./Navi.scss";
import * as BsIcons from "react-icons/bs";

export default function Navi() {
  return (
    <div className="navBar">
      <div className="navBar-brand">
        <Link to="/">
          <div className="navBar-icon">
            <BsIcons.BsPeopleFill />
          </div>
          <p>Human Resource Management System</p>
        </Link>
      </div>
      <div className="navBar-items">
        <ul>
          {NavbarData.map((item, index) => {
            return (
              <Link key={index} to={item.direction}>
                <li className={item.cName}>
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navBar-log">
        <ul>
          {NavbarLogData.map((item, index) => {
            return (
              <Link key={index} to={item.direction}>
                <li className={item.cName}>
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
