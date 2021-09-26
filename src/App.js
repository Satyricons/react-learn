import './App.css';
import Head from "./components/head/head";
import Body from "./components/body/body";
import {BrowserRouter, Route} from "react-router-dom";
import Spisok from "./components/spisok/spisok";

function App() {
  return (
      <BrowserRouter>

    <div className="App">
        <Head id="Егор Каменски" />
        <Route path="/body" component={Body} />
        <Route path="/spisok/" component={Spisok} />
    </div>
          </BrowserRouter>
  );
}

export default App;
