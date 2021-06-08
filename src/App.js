import logo from "./logo.svg";
import "./App.css";
import ListPersonComponent from "./components/ListPersonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <br />
      <div className="container">
        <ListPersonComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
