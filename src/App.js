import style from './App.module.scss';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import CardS from './components/Card-S/CardS';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardL from './components/Card-L/CardText/CardL';

function App() {
  
  return (
    <div className={style.App}>
      <CardL/>
    </div>
  );
}

export default App;
