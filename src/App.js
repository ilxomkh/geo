import logo from './logo.svg';
import './App.css';
import AntiFraudBanner from './components/warning';
import Navbar from './components/navbar';
import YellowSection from './components/ysection';

function App() {
  return (
    <div className="App">
      <AntiFraudBanner />
      <div>
        <Navbar />
        <YellowSection />
      <div style={{ height: "2000px", backgroundColor: "#f5f5f5" }}>
        <h1>Другой контент страницы</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
