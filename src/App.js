import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SideMenu from './components/SideMenu';
import Student from './pages/Student';
import LessonPlan from './pages/LessonPlan';
import Settings from './pages/Settings';

function App() {
  const [inActive, setInActive] = useState(false);

  const onCollapse = (inActive) => {
    setInActive(inActive);
  };

  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={onCollapse} />
        <div className={`container ${inActive ? 'inactive' : ''}`}>
          <Switch>
            <Route  path='/student'>
              <Student />
            </Route>
            <Route exact path='/'>
              <LessonPlan />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
