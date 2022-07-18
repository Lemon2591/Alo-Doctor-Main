import "./App.css";
import Register from "./conponent-router/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
