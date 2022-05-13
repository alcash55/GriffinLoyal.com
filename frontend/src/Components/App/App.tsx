import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "../AppShell/Sidebar/SideBar";
import { AboutMe, Merch, Music, Schedule, Sponsors, Watch } from "../Sections";
import "./App.scss";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="appContent">
          <Routes>
            <Route path="/" element={<Merch />} />
            <Route path="/Watch" element={<Watch />} />
            <Route path="/Music" element={<Music />} />
            <Route path="Schedule" element={<Schedule />} />
            <Route path="Sponsors" element={<Sponsors />} />
            <Route path="AboutMe" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
