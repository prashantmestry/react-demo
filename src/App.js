import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LeftNavigation from './component/navigation/LeftNavigation';
import TopLinks from './component/navigation/TopLinks';
import Home from './component/Home';
import HomeFun from './component/HomeFun';
import About from './component/about/About';

function App(props) {

  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <section>
          <TopLinks />
          <div style={{ padding : '10px' }}>
            <Switch>
              <Route exact path='/' ><Home /></Route>
              <Route exact path='/about' ><About /></Route>
              <Route exact path='/shop' ><About /></Route>
              <Route exact path='/homefun' ><HomeFun /></Route>
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
