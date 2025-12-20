import About from './About';
import AllRepos from './AllRepos';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allrepos" element={<AllRepos />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
