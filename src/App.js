import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AvailableParking from './components/AvailableParking';
import Available from './components/Available';

function App() {
  return (
    <Routes>
  
   <Route path='/available' element={[<AvailableParking/>]} />
   <Route path='/s001' element={[<Available/>]} />
   


    </Routes>


  );
}

export default App;
