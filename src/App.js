import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import BasicList from './BasicList';

function App() {
  const name='John';
  return (
    
    <div className="App">
      <Greetings name={name}/>
      <BasicList/>
    </div>
  );
}

export default App;
