import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './component/NavbarComp';
import Clock from './component/Clock';

function App() {
  return (
    <div className="App">
     <NavbarComp/>
     <Clock/>
    </div>
  );
}
export default App;
