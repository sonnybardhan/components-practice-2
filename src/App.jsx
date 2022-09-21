import './App.css';
import Autocomplete from './components/autocomplete/Autocomplete';
import NestedFolders from './components/NestedFolders';
import data from './data/data';

function App() {
  return (
    <div className='App'>
      <h1>Components Demo</h1>
      <h2>Autocomplete Demo</h2>
      <Autocomplete />
    </div>
  );
}

export default App;
