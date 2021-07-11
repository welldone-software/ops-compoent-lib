import logo from './logo.svg';
import './App.css';
import {Button} from 'ops-component-lib';

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert('test')} primary>ccc</Button>
    </div>
  );
}

export default App;
