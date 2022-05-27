import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useRef } from 'react';

import Home from './components/Home';
import Layout from './components/layout';
import Settings from './components/settings';
import Saved from './components/saved';
import SavedPoemContainer from './components/saved/SavedPoemContainer';
import Authors from './components/authors';
import Author from './components/author';
import Auth from './components/authentication';

function App() {

  const appRef = useRef(null);
  return (
    <div className="App" ref={appRef}>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Layout appRef={appRef}/>}>
            <Route index element={<Home />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/saved' exact element={<Saved />} />
            <Route path='/saved/:author/:title' exact element={<SavedPoemContainer />} />
            <Route path='/authors' exact element={<Authors />} />
            <Route path='/author/:author' exact element={<Author />} />
          </Route>
          <Route path='/authenticate' exact element={<Auth />} />
        </Routes>

      </BrowserRouter>
    </div>
  ); 
}

export default App;
