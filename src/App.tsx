import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactForm from './pages/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
