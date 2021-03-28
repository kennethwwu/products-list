import { createStore } from './store'
import './App.css';

import ItemsList from './components/ItemsList'
import ItemsFilter from './components/ItemsFilter'
import SearchBar from './components/SearchBar'

const Store = createStore();

function App() {
  return (
    <Store>
      <SearchBar />
      <ItemsFilter />
      <ItemsList />
    </Store>
  );
}

export default App;
