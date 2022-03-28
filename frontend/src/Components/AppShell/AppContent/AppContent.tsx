import "./AppContent.scss";
import Merch from "../../Sections/Merch/Merch";
import Watch from "../../Sections/Watch/Watch";
import Schedule from "../../Sections/Schedule/Schedule";
import Sponsors from "../../Sections/Sponsors/Sponsors";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import ReactPageScroller from "react-page-scroller";
import React from "react";
import { Pagination } from "react-bootstrap";

export default class AppContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ReactPageScroller>
          <Merch />
          <Watch />
          <Schedule />
          <Sponsors />
          <AboutMe />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
