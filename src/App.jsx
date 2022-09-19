import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';

const items = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque earum, debitis illo modi corrupti magnam deleniti mollitia qui et eius dignissimos magni veniam fugiat? Asperiores adipisci harum cupiditate fugiat necessitatibus eaque hic, praesentium voluptatum pariatur veniam exercitationem unde dignissimos expedita, dolorum magni est quae nam quisquam tempore doloremque! Voluptatem.',
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque earum, debitis illo modi corrupti magnam deleniti mollitia qui et eius dignissimos magni veniam fugiat? Asperiores adipisci harum cupiditate fugiat necessitatibus eaque hic, praesentium voluptatum pariatur veniam exercitationem unde dignissimos expedita, dolorum magni est quae nam quisquam tempore doloremque! Voluptatem.',
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque earum, debitis illo modi corrupti magnam deleniti mollitia qui et eius dignissimos magni veniam fugiat? Asperiores adipisci harum cupiditate fugiat necessitatibus eaque hic, praesentium voluptatum pariatur veniam exercitationem unde dignissimos expedita, dolorum magni est quae nam quisquam tempore doloremque! Voluptatem.',
  },
  {
    id: 4,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque earum, debitis illo modi corrupti magnam deleniti mollitia qui et eius dignissimos magni veniam fugiat? Asperiores adipisci harum cupiditate fugiat necessitatibus eaque hic, praesentium voluptatum pariatur veniam exercitationem unde dignissimos expedita, dolorum magni est quae nam quisquam tempore doloremque! Voluptatem.',
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Accordion Demo</h1>
      <main>
        {items.map((item) => (
          <Accordion title={item.title} content={item.content} key={item.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
