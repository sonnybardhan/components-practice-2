import './App.css';
import { data } from './components/tabs/data';
import Tabs from './components/tabs/Tabs';
function App() {
  return (
    <div className='App'>
      <Tabs contents={data} />
    </div>
  );
}

export default App;
