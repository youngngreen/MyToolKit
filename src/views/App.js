import './App.scss';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ListTodo from './Todos/ListTodo';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            {/* <Route path="/">
              <Home />
            </Route>

            <Route path="/todo">
              <ListTodo />
            </Route> */}
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;