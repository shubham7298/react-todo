import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <TitleBar title="ToDo Application" />
      <Main/>
    </div>
  );
}

export default App;
