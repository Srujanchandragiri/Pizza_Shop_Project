import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Endbar from './endbar/endbar';



function App() {
  return (
    <div className="App">
    <Navbar/>
     <Homescreen/>
  <Endbar/>
     
     
  
    </div>
  );
}

export default App;
