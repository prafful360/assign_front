import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff9900" };
  else return { color: "#000000" };
};

const Menu = ({ history }) => (
  <nav
    className=" navbar navbar-expand-lg fixed-top bg-white container"
    id="mainNav"
  >
    <div className="container ">
      <a className="navbar-brand " id="navBrand" href="">
        JSONPlaceHolderAPI
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "1px solid" }}
      >
        Menu
      </button>
      <div className="collapse navbar-collapse " id="navbarResponsive">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item" style={{ fontSize: "50px" }}>
            <Link className="nav-link" style={isActive(history, "/")} to="/">
              USERS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default withRouter(Menu);
