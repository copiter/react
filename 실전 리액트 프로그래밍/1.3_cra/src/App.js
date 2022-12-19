import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      {console.log(`NODE_ENV = ${process.env.NODE_ENV}`)}
      {console.log(`NODE_ENV = ${process.env.REACT_APP_DATA_API}`)}
      {console.log(`NODE_ENV = ${process.env.REACT_APP_LOGIN_API}`)}
    </div>
  );
}

export default App;
