
import { Box } from '@chakra-ui/react';
import './App.css';
import WellMaintain from './Sections/WellMaintain';
import EasyAccess from './Sections/EasyAccess';
import Home from './Page/Home';
import Footer from './Components/Footer';
import FrequentlyAsked from './Sections/FrequentlyAsked';
import RentTopBikes from './Sections/RentTopBikes';



function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <EasyAccess/> */}
      {/* <Footer/> */}
      {/* <FrequentlyAsked/> */}
      <RentTopBikes/>
    </div>
  );
}

export default App;
