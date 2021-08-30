import React from 'react';
// import "./reset.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Counter from './components/Counter';
import CaruselWallpaper from './components/CarouselWallpaper';
import WindowsSize from './components/WindowsSize';
import MouseTracker from './components/MouseTracker';
import Tree from './components/Tree';
import CommentsClass from './components/Comments/CommentsClass';
import CommentsFunc from './components/Comments/CommentsFunc';

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
            <li>
              <Link to="/mouseTracker">MouseTracker</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/counter" component={Counter} />

          <Route path="/caruselWallpaper">
            <Counter />
            <CaruselWallpaper />
            <WindowsSize />
          </Route>

          <Route path="/windowsSize" component={WindowsSize} />

          <Route path="/mouseTracker" component={MouseTracker} />

          <Route path="/tree" component={Tree} />

          <Route path="/comments">
            <CommentsClass />
            <CommentsFunc />
          </Route>


        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
