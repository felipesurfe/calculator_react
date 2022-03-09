import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }

    setCalc(calc + value);
  }
  
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button 
          onClick={() => updateCalc(i.toString())} 
          key={i}>
          {i}
        </button>
      )
    }

    return digits;
  }

  return (
    <div className="App">
      <div class="calculator">
        <div class="display">
          {result ? <span>(0)</span> : '' }
          {calc || "0"}
        </div>
        
        <div class="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button>DEL</button>        
        </div>

        <div class="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          
          <button>=</button>          
        </div>

      </div>
    </div>
  );
}

export default App;
