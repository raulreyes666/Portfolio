import logo from './media/Icon.png';
import './App.css';
import NavBar from './components/NavBar';
import Stack from './components/Stack';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import City from './api/City';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Stack/>
      <Contact/>
      <City/>
    </div>
  );
}

export default App;
