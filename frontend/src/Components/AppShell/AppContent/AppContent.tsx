import "./AppContent.scss";
import Merch from "../../Sections/Merch/Merch";
import Watch from "../../Sections/Watch/Watch";
import Schedule from "../../Sections/Schedule/Schedule";
import Sponsors from "../../Sections/Sponsors/Sponsors";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import ReactPageScroller from "react-page-scroller";

const AppContent = () => {
  return (
    <ReactPageScroller animationTimer={700}>
      <Merch />
      <Watch />
      <Schedule />
      <Sponsors />
      <AboutMe />
    </ReactPageScroller>
  );
};

export default AppContent;
