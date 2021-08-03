import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPersonComponent from "./components/ListPersonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreatePersonComponent from "./components/CreatePersonComponent";
import UpdatePersonComponent from "./components/UpdatePersonComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPersonComponent}></Route>
            <Route path="/persons" component={ListPersonComponent}></Route>
            <Route
              path="/add-person/:id"
              component={CreatePersonComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
