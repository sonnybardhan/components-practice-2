import './App.css';
import NestedFolders from './components/NestedFolders';
import data from './data/data';

function App() {
  return (
    <div className='App'>
      <h1>Components Demo</h1>
      <main className='component-container'>
        <NestedFolders data={data} />
      </main>
    </div>
  );
}

export default App;
