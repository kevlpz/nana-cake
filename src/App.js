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
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

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
        <Route path="/products" component={AllProducts} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
