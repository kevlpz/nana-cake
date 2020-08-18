import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Crochet from './components/Crochet';
import Stickers from './components/Stickers';
import Buttons from './components/Buttons';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import axios from 'axios';
import { UserContext } from './context/UserContext';


function App() {
  const [user, setUser] = useState(null);

  // save auth data to state
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/users/user',
      withCredentials: true
    })
      .then(res => {
        if(res.data.admin) {
          setUser('admin');
        }
        else if(res.data.username) {
          setUser('user');
        } else {
          setUser('');
        }
      })
      .catch(err => console.log(err));
  }, []);

  // const checkAuth = (user, auth, component) => {
  //   if(user === auth) {
  //     return component
  //   } else {
  //     return <Redirect to="/" />
  //   }
  // }

  console.log('user: ', user);

  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      user === 'admin' ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  )

  if(user === null) {
    return <h3>Loading...</h3>
  } else {
    return (
      <div className="App">
        <Header />
  
        <Switch>
          <UserContext.Provider value={user}>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/crochet" component={Crochet} />
            <Route path="/stickers" component={Stickers} />
            <Route path="/buttons" component={Buttons} />
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/login" render={props => user !== null ? <Login {...props} user={user} /> : <Redirect to="/" />} />
            {/* <Route path="/login">
              {user !== null ? <Login /> : <Redirect to='/' />}
            </Route> */}
            <AdminRoute component={Dashboard} />
          {/* <Route path="/dashboard" render={props => <Dashboard {...props} user={user} />} /> */}
          </UserContext.Provider>
        </Switch>
  
        <Footer />
      </div>
    );
  }
}

export default App;
