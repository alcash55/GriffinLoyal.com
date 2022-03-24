import AppContent from "../AppShell/AppContent/AppContent";
import Footer from "../AppShell/AppFooter/Footer";
import SideBar from "../AppShell/Sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
