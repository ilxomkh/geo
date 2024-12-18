import logo from './logo.svg';
import './App.css';
import AntiFraudBanner from './components/warning';
import Navbar from './components/navbar';
import YellowSection from './components/ysection';
import Services from './components/services';
import PressCenter from './components/PressCenter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <AntiFraudBanner />
      <div>
        <Navbar />
        <YellowSection />
        <Services />
        <PressCenter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
