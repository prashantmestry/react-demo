import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LeftNavigation from './component/navigation/LeftNavigation';
import TopLinks from './component/navigation/TopLinks';
import Home from './component/Home';
import HomeFun from './component/HomeFun';
import About from './component/about/About';
import User from './component/user/User';

// function roundNumber(num) {
//   return Math.round(num * 100) / 100;
// }

function App(props) {

  useEffect(() => {

    //let Jarvis = Object.create({});

    //Jarvis.prototype.roundNumber = function () { console.log('here we go') };

  }, [])

  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <section>
          <TopLinks />

          <Switch>
            <Route exact path='/' ><Home /></Route>
            <Route exact path='/about' ><About /></Route>
            <Route exact path='/shop' ><User /></Route>
            <Route exact path='/homefun' ><HomeFun /></Route>
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
