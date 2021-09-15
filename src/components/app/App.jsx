import PokeCards from '../../containers/PokeCards/PokeCards';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Header from '../header/Header';
import SearchBox from '../../containers/search/SearchBox';
import PaginationContainer from '../../containers/pagination/Pagination'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <SearchBox />
        <div className="cards_container">
          <PokeCards />
        </div>
        <PaginationContainer />
      </div>
    </Router>
  );
}

export default App;
