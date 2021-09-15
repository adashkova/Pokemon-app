import PokeCards from '../../containers/PokeCards/PokeCards';
import { useLocation, useParams } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Header from '../header/Header';
import SearchBox from '../../containers/search/SearchBox';
import PaginationContainer from '../../containers/pagination/Pagination'

const App = () => {

  const location = useLocation()

  console.log(`location`, location)

  console.log('parasm =>>> ',useParams())
  return (

    <>
      <Header />
      <div className="App">
        <SearchBox />
        <div className="cards_container">
          <PokeCards />
        </div>
        <PaginationContainer />
      </div>
    </>

  );
}

export default App;
