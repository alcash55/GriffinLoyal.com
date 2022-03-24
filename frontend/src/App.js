import './App.css';
import TwitterTimeline from './Assets/TwitterTimeline.tsx';
import AppBarFooter from './Assets/AppBarFooter.tsx';
import AppBarHeader from './Assets/AppBarHeader.tsx';
import AppContent from './Assets/AppContent.tsx';

function App() {
  return (
    <div className="App" display="flex" flexDirection="column">
      <AppBarHeader />
      <div className="TwitterTimeline">
        <TwitterTimeline />
      </div>
      <AppContent />
      <AppBarFooter />
    </div>
  );
}

export default App;
