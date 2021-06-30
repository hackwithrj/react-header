import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact>
          <Home/>
        </Route>
        <Route path="/about" component={About} exact>
          <About/>
        </Route>
        <Route path="/products" component={Products} exact>
          <Products/>
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
