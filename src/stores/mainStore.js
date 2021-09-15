import { runInAction, makeAutoObservable } from 'mobx';
import { service } from '../apiService';

const fetchAll = () => {
  return service.get('https://pokeapi.co/api/v2/pokemon');
};

fetchAll().then(result => console.log('fetchAll', result));

/// Store
class mainStore {
  state = {
    isLoading: false,
    pokemonsData: [],
    error: undefined,
    searchValue: '',
    page: 1,
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchWithDetails = () => {
    return service.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
      return Promise.all(
        response.results.map(pokemon =>
          service.get(pokemon.url).then(res => {
            runInAction(() => {
              this.state.pokemonsData.push(res);
            });
          })
        )
      );
    });
  };
}

export default new mainStore();
