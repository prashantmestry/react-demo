import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LeftNavigation from './component/navigation/LeftNavigation';
import Home from './component/Home';
import About from './component/about/About';

function App(props) {

  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <section>
          <Switch>
            <Route exact path='/' ><Home /></Route>
            <Route exact path='/about' ><About /></Route>
            <Route exact path='/shop' ><About /></Route>
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
