import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/layout';
import Settings from './components/settings';
import Saved from './components/saved';
import SavedPoemContainer from './components/saved/SavedPoemContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/saved' exact element={<Saved />} />
            <Route path='/saved/:author/:title' exact element={<SavedPoemContainer />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
