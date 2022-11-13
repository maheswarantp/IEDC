import { loadFull } from 'tsparticles';

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Events from './components/Events/Events'
import Execom from './components/Execom/Execom'
import Footer from './components/Footer/Footer'


function App() {
  const particlesInit = async(main) => await loadFull(main)
  const particlesLoaded =  () => console.log('loaded particles')

  return (
    <div className="App">
      <NavBar />
      <LandingPage particlesInit={particlesInit} particlesLoaded={particlesLoaded}/>
      <About />
      <Events />
      <Execom />
      <Footer />
    </div>
  );
}

export default App;
