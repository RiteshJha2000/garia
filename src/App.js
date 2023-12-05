
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Story from './Components/Story';
import Ride from './Components/Ride';
import Details from './Components/Details';
import Image from './Components/Image';
import CarsAction from './Components/CarsAction';
import Dealer from './Components/Dealer';
import Footer from './Components/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Home - Garia Luxury Cars';
  });

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Story/>
      <Ride/>
      <Image/>
      <CarsAction/>
      <Dealer/>
      <Footer/>
    </div>
  );
}

export default App;
