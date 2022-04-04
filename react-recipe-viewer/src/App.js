import './App.css';
import Home from './Home';
import Header from './Header';
import Signup from './Signup';
import AddRecipe from './AddRecipe';
import Login from './Login';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addrecipe">
          <AddRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
