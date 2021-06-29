import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import Education from './Components/Education'
import Stack from './Components/Stack';
import Contact from './Components/Contact'
import { Icon } from '@iconify/react';
import bxMenu from '@iconify-icons/bx/bx-menu';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';


function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview("pageview", location.pathname);
    console.log(location)
  console.log(location);
  }, [location])
}

const trackingId = "G-WK39HEGN9M";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const AppRouter = () => {
  usePageViews()
  return (
        <Route render={() => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch>
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

const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <header className="navbar">
          <nav className={`${openMenu ? 'menu-open' : 'menu-closed'} main-nav`}>
            <NavLink
              onClick={() => setOpenMenu(false)}
              className="home-logo"
              to="/"
            >
              Peter Smith
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/projects"
              activeStyle={{fontWeight: "bold", color: "#109a81"}}
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/stack"
              activeStyle={{fontWeight: "bold", color: "#109a81"}}
            >
              Tech Stack
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/education"
              activeStyle={{fontWeight: "bold", color: "#109a81"}}
            >
              Education
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/contact"
              activeStyle={{fontWeight: "bold", color: "#109a81"}}
            >
              Contact
            </NavLink>
          </nav>
          <button className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
            <Icon icon={bxMenu} />
          </button>
        </header>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
