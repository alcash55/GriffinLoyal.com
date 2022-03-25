import AppContent from "../AppShell/AppContent/AppContent";
import Footer from "../AppShell/AppFooter/Footer";
import SideBar from "../AppShell/Sidebar/SideBar";
import useSideBar from "../AppShell/Sidebar/useSideBar";

function App() {
  // const { collapseButton }: boolean = useSideBar();
  return (
    <div className="App">
      <SideBar />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
