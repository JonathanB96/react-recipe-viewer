import './App.css';
import Home from './Home';
import Header from './Header';
import Signup from './Signup';
import Addrecipe from './AddRecipe';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Login/>
      <Signup />
      <Addrecipe />

    </div>
  );
}

export default App;
