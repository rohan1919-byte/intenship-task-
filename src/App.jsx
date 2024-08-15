import { useState } from 'react'
import './App.css'

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    if (num < 150) {
      const newNum = num + 1;
      updateHistory(newNum);
    }
  };

  const decrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      updateHistory(newNum);
    }
  };

  const updateHistory = (newNum) => {
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newNum);
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
    setNum(newNum);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1]);
    }
  };


  return (
    <div className="app">
      <h1 className='heading'>Number: {num}</h1>
      <div className="buttons">
        <button onClick={decrement} className='values'>Decrement </button>
        <button onClick={increment} className='values'>Increment </button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(num / 150) * 100}%` }}
        ></div>
      </div>
      <div className="undo-redo">
        <button onClick={undo} disabled={currentIndex === 0} className='values'>
          Undo
        </button>
        <button onClick={redo} disabled={currentIndex === history.length - 1} className='values'>
          Redo
        </button>
      </div>
    </div>
  );
};

export default App
