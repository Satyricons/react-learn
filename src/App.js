import './App.css';
import Head from "./components/head/head";
import Body from "./components/body/body";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
      <BrowserRouter>

    <div className="App">
        <Head id="Егор Каменски" />
        <Route path="/body" component={Body} />
        <Route path="/sidebar" component={Sidebar} />
    </div>
          </BrowserRouter>
  );
}

export default App;
