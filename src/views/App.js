import './App.scss';
import Nav from './Nav/Nav';
import Home from './Home/Home';
// import ListTodo from './Todos/ListTodo';
import About from './About/About';
// import ListUser from './User/ListUser';
import Calculator from './Calculator/Calculator';
import Emoji from './Emoji/Emoji';
import PhotoCompresser from './PhotoCompresser/PhotoCompresser';
import Dictionary from './Dictionary/Dictionary';
// import Weather from './Weather/Weather';

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
            {/* <Route path="/todo" element={<ListTodo />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/user" element={<ListUser />} /> */}
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/symbol" element={<Emoji />} />
            <Route path="/photocompresser" element={<PhotoCompresser />} />
            <Route path="/dictionary" element={<Dictionary />} />
            {/* <Route path="/weather" element={<Weather />} /> */}
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
