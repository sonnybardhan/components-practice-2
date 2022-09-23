import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='App' onClick={() => console.log('clicked')}>
      <h1>Components Demo</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        Some content
      </Modal>
      <div className='other-content'>
        <p>Other Content here</p>
      </div>
    </div>
  );
}

export default App;
