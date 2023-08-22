import logo from './logo.svg';
// import Services from './components/services/services';

import Navbar from './Components/navbar';
// import Hero from './components/hero/hero';
// import TechnologiesPage from './Components/technology';
// import ContactSection from './Components/contact';
import Footer from './Components/footer';
import Freelancing from './Components/freelancing';
import './App.css';
import Services from './Components/services/services';
import Hero from './Components/hero/hero';

function App() {
  return (
    <div className="App">
      {/* <Hero></Hero> */}
      <Hero></Hero>
     <Services></Services>
      {/* <TechnologiesPage></TechnologiesPage> */}
      {/* <ContactSection></ContactSection> */}
      <Freelancing></Freelancing>
      <Footer></Footer>
    </div>
  );
}

export default App;