import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/home';
import CardSliderBig from './components/CardSliderBig/CardSliderBig'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route exact  path="/" component={Home}/>
          </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
