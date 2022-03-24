import './App.css';
import AppBarFooter from './assets/AppBarFooter.tsx';
import AppBarHeader from './assets/AppBarHeader.tsx';
import AppContent from './assets/AppContent.tsx';

function App() {
  return (
    <div className="App" display="flex" flexDirection="column">
      <AppBarHeader />
      <AppContent />
      <AppBarFooter />
    </div>
  );
}

export default App;
