import HeroSection from './Components/HeroSection/HeroSection'
import SiteHeader from './Components/Header/SiteHeader'
import Services from './Components/Services/Services'
import './App.css'
function App() {
  return (
    <header className="App">
      <SiteHeader/>
      <HeroSection/>
      <Services/>
    </header>
  );
}

export default App;
