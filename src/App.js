import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Crochet from './components/Crochet';
import Stickers from './components/Stickers';

function App() {
  return (
    
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crochet" component={Crochet} />
        <Route path="/stickers" component={Stickers} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
