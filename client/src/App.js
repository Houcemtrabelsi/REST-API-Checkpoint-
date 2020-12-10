import "./App.css";
import Add from "./pages/Add";
import ContactListe from "./pages/ContactListe";
import{Route} from "react-router-dom"
import{Switch}from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h2>workshop</h2>
      <Switch>
        <Route exact path="/" component={ContactListe} />
        <Route path={["/add","/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
