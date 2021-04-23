import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePortal from './Pages/HomePortal';
import VaccinePortal from './Pages/VaccinePortal';
import VaccineNews from './Pages/VaccineNews';
import FetchAPI from './ContextAPI/FetchAPI';

function App() {
  FetchAPI()
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={HomePortal}></Route>
        <Route path='/vaccine-portal' component={VaccinePortal}></Route>
        <Route path='/news' component={VaccineNews}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
