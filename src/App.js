import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Crochet from './components/Crochet';
import Stickers from './components/Stickers';
import Buttons from './components/Buttons';

function App() {
  return (
    
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/crochet" component={Crochet} />
        <Route path="/stickers" component={Stickers} />
        <Route path="/buttons" component={Buttons} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
