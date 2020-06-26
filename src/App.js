import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentCards from './components/ContentCards';
import HomeCarousel from './components/HomeCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeCarousel />
      <ContentCards />
      <Footer />
    </div>
  );
}

export default App;
