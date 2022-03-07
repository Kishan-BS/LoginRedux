import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route exact path='/home' component={Home}/>
    </div>
    </Router>
  );
}

export default App;
