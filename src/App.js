// import logo from "./logo.svg";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // useHistory,
} from "react-router-dom";

import Home from "./components/home/home";
// import Weather from "./components/weather/weather";
// import About from "./components/about/about";
import Login from "./components/login/Login";
import Managers from "./components/managers/managers";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function App() {
  // let history = useHistory();

  return (
    <>
      <Switch>
        <Route path="/managers">
          <Managers />
        </Route>

        <Route path="/requests">
          <Home />
        </Route>

        {/* <Route path="/weather">
          <Weather />
        </Route> */}

        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
