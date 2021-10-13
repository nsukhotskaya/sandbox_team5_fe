import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
  const name='John';
  return (
    
    <div className="App">
      <Greetings name={name}/>
    </div>
  );
}

export default App;
