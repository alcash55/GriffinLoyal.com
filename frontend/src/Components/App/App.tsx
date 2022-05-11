import AppContent from "../AppShell/AppContent/AppContent";
import SideBar from "../AppShell/Sidebar/SideBar";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <SideBar />
      <AppContent />
    </div>
  );
};
