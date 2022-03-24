import './App.css';
import AppBarFooter from './Assets/components/app footer/AppBarFooter.tsx';
import AppBarHeader from './Assets/components/app header/AppBarHeader.tsx';
import AppContent from './Assets/components/content/AppContent.tsx';
import SideBar from './Assets/components/side bar/SideBar.tsx'

function App() {
  return (
    <div className="App" display="flex" flexDirection="column">
      <SideBar />
      <AppBarHeader />
      <AppContent />
      <AppBarFooter />
    </div>
  );
}

export default App;
