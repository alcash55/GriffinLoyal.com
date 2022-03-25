import AppContent from "../AppShell/AppContent/AppContent";
// import Footer from "../AppShell/AppFooter/Footer";
import SideBar from "../AppShell/Sidebar/SideBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideBar />
      <AppContent />
    </div>
  );
}

export default App;
