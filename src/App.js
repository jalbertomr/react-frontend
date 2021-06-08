import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPersonComponent from "./components/ListPersonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" component={ListPersonComponent}></Route>
            <Route path="/persons" component={ListPersonComponent}></Route>
            <ListPersonComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
