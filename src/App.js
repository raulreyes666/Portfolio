import './App.css';
import NavBar from './components/NavBar';
import Stack from './components/Stack';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import City from './api/City';
import CallToAction from './components/CallToAction';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Stack/>
      <Contact/>
      <CallToAction/>
      <City/>

    </div>
  );
}

export default App;
