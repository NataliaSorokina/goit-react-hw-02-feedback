// import logo from './logo.svg';
import styles from './App.module.css';
import Feedback from 'components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <Feedback initialGood={0} initialNeutral={0} initialBad={0} />
    </div>
  );
}

export default App;
