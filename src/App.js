import React from 'react';
// import "./reset.css";

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Counter from './components/Counter';
import CaruselWallpaper from './components/CarouselWallpaper';
import WindowsSize from './components/WindowsSize';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/caruselWallpaper">CaruselWallpaper</Link>
            </li>
            <li>
              <Link to="/windowsSize">WindowsSize</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/counter" component={Counter} />

          <Route path="/windowsSize" component={WindowsSize} />

          <Route path="/caruselWallpaper">
            <Counter />
            <CaruselWallpaper />
            <WindowsSize />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
