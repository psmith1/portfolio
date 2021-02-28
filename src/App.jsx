import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import Education from './Components/Education'
import Stack from './Components/Stack';
import Contact from './Components/Contact'

const AppRouter = () => {
  let location = useLocation()
  return (
        <Route render={({location}) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location}>
              <Route path="/contact" component={Contact} />
              <Route path="/education" component={Education} />
              <Route path="/stack" component={Stack} />
              <Route path="/projects" component={Projects}/>
              <Route path="/" component={Homepage} />
            </Switch>
          </AnimatePresence>
        )} />
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="main-nav">
          <Link className="home-logo" to="/">Peter Smith</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/stack">Tech Stack</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
