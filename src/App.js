
import './App.css';
import Achievement from './components/Achievement';
import Banner from './components/Banner';
import Details from './components/Details';
import Feature from './components/Feature';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import Advantages from './components/Advantages';
import Services from './components/Services';
import ZyntechFeatures from './components/ZyntechFeatures';
import Faqs from './components/Faqs';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Banner />
      <Summary />
      <Details />
      <Achievement />
      <Feature />
      <Advantages />
      <Services />
      <ZyntechFeatures />
      <Faqs />
      <Clients />
      <Blog />
      <Footer />
      
      
    </div>
  );
}

export default App;
