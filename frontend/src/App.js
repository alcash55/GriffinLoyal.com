import './App.css';
import AppBarHeader from './Assets/AppBarHeader.tsx';
import TwitterTimeline from './Assets/TwitterTimeline.tsx';

function App() {
  return (
    <div className="App">
      <AppBarHeader />
      <div className="TwitterTimeline">
        <TwitterTimeline />
      </div>
    </div>
  );
}

export default App;
