import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';

function App() {
  return (
    <Accordion
      defaultOpened={1}
      listData={
      [
        {
          id: 1, title: 'Название #1', isOpen: false, text: 'Текст #1',
        },
        {
          id: 2, title: 'Название #2', isOpen: false, text: 'Текст #2',
        },
        {
          id: 3, title: 'Название #3', isOpen: false, text: 'Текст #3',
        },
      ]
    }
    />
  );
}

export default App;
