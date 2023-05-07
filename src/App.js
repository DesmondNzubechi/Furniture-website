import './App.css';
import { DesktopNav } from './components/Navlink/desktopviewNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobileNav } from './components/Navlink/mobileviewNav';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  <DesktopNav/>
  <MobileNav/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
