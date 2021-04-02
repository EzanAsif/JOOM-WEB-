import HeroSection from './Components/HeroSection/HeroSection'
import SiteHeader from './Components/Header/SiteHeader'
import Services from './Components/Services/Services'
import ContactUs from './Components/ContactUs/ContactUs'
import FourthSection from './Components/FourthSection/FourthSection'
import JoinUs from './Components/JoinUs/JoinUs'
import StartSelling from './Components/StartSelling/StartSelling'
import SiteFooter from './Components/SiteFooter/SiteFooter'

import './App.css'
function App() {
  return (
    <header className="App">
      <SiteHeader/>
      <HeroSection/>
      <Services/>
      <ContactUs/>
      <FourthSection/>
      <JoinUs />
      <StartSelling />
      <SiteFooter />
    </header>
  );
}

export default App;
