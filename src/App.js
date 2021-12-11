import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/home';
import CardSliderBig from './components/CardSliderBig/CardSliderBig'

function App() {
  
  return (
      <>
      <Navbar/>
      <CardSliderBig/>
      <div className="app">
        <Home/>
      </div>
      <Footer/>
      </>
  );
}

export default App;
