
import { Box } from '@chakra-ui/react';
import './App.css';
import Form from './Components/Form';
import CustomerFavourites from './Sections/CustomerFavourites';
import OurKeyMiles from './Sections/OurKeyMiles';
import Home from './Page/Home';
import TopBikes from './Sections/TopBikes';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <TopBikes/> */}
    </div>
  );
}

export default App;
