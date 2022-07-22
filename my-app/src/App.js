import { Route, Switch } from "react-router-dom";
import "./components/LoginForm.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
 



function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
