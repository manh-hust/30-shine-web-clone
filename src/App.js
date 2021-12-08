import style from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import CardSlider from './components/Card-M/CardSlider/CardSlider';
function App() {
  
  return (
    <div className={style.App}>
      <CardSlider/>
    </div>
  );
}

export default App;
