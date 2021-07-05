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
        <Route exact path="/" component={Home}>
          <Home/>
        </Route>
        <Route exact path="/about" component={About}>
          <About/>
        </Route>
        <Route exact path="/products" component={Products}>
          <Products/>
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
