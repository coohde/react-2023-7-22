import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  function up(){
    setCount(count+1);
  }
  const stepHandler = (evt) => {
    setStep(Number(evt.target.value));
  };
  return <div>
    <h1>{title}</h1>
    <button onClick={up}>+</button> 
    <input type="number" value={step} onChange={stepHandler}/>
    {count}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
