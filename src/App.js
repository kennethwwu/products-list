import { createStore } from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import ItemsList from './components/ItemsList'
import ItemsFilter from './components/ItemsFilter'
import SearchBar from './components/SearchBar'
import { Layout, Header, Content } from './Layout'

const Store = createStore();

function App() {
  return (
    <Store>
      <Layout>
        <Header>
          <SearchBar />
          <ItemsFilter />
        </Header>
        <Content>
        <ItemsList />
          </Content>
      </Layout>
    </Store>
  );
}

export default App;
