import logo from './logo.svg';
import './App.css';
import smaller from './smaller.png';
import big from './big.jpg'

function App() {
  return (
    <div className="App">
      <img src={smaller} alt='smaller' />
      <img src={big} alt='big' />
    </div>
  );
}

export default App;
