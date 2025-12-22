import About from './About';
import AllRepos from './AllRepos';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import RepoDetails from './RepoDetails';
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
            <Route path="/repos/:name" element={<RepoDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
