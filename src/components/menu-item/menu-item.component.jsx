import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item`}
    onClick={() => {
      console.log(match);
      history.push(linkUrl);
    }}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

//shop-hats
