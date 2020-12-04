import {useEffect, useState} from 'react';
import axios from 'axios';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage/Homepage';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';

// Components
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
    .then((res) => {
      setMovies(res.data.entries);
      setLoading(false);
    })
    .catch((err) => setError(err.message));
  }, [])

  return (    
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} loading={loading} error={error} title="Titles" />} />
        <Route exact path="/series" render={(props) => <Series {...props} title="series" movies={movies} />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} title="movies" movies={movies} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
