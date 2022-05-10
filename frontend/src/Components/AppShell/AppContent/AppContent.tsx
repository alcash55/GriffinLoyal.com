import "./AppContent.scss";
import {
  Merch,
  Watch,
  Music,
  Schedule,
  Sponsors,
  AboutMe,
} from "../../Sections";
import ReactPageScroller from "react-page-scroller";

const AppContent = () => {
  return (
    <ReactPageScroller animationTimer={700}>
      <Merch />
      <Watch />
      <Music />
      <Schedule />
      <Sponsors />
      <AboutMe />
    </ReactPageScroller>
  );
};

export default AppContent;
