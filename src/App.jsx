// parts
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

// style
import './styles/global.scss';

export function App() {

  return(
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}