import style from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import CardL from './components/Card-L/CardText/CardL';
// import CardS from './components/Card-S/CardS';
// import CardTextM from './components/Card-M/CardText/CardTextM';
import CardBtnM from './components/Card-M/CardBtn/CardBtnM';
function App() {
  
  return (
    <div className={style.App}>
        <CardBtnM/>
    </div>
  );
}

export default App;
