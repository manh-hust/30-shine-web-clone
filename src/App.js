import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/home';


function App() {
  
  return (
      <>
      {/* <Navbar/> */}
      <div className="app">
        <Home/>
      </div>
      {/* <Footer/> */}
      </>
  );
}

export default App;
