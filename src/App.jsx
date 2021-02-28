import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  // useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import Education from './Components/Education'
import Stack from './Components/Stack';
import Contact from './Components/Contact'
import { Icon } from '@iconify/react';
import bxMenu from '@iconify-icons/bx/bx-menu';
import { useState } from 'react';


const AppRouter = () => {
  // let location = useLocation()
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

const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <header className="navbar">
          <nav className={`${openMenu ? 'menu-open' : 'menu-closed'} main-nav`}>
            <Link onClick={() => setOpenMenu(false)} className="home-logo" to="/">Peter Smith</Link>
            <Link onClick={() => setOpenMenu(false)} to="/projects">Projects</Link>
            <Link onClick={() => setOpenMenu(false)} to="/stack">Tech Stack</Link>
            <Link onClick={() => setOpenMenu(false)} to="/education">Education</Link>
            <Link onClick={() => setOpenMenu(false)} to="/contact">Contact</Link>
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
