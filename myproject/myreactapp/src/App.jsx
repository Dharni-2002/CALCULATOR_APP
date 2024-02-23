import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const evaluateExpression = async () => {
    try {
      const response = await axios.post('http://localhost:8000/evaluate/', { expression });
      setResult(response.data.result);
    } catch (error) {
      setResult(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <input type="text" value={expression} readOnly />
      <br />
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      {/* Add more buttons for other numbers, operators, etc. */}
      <br />
      <button onClick={() => evaluateExpression()}>=</button>
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default App;
