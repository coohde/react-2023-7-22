import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  function up(){
    setCount(count+1);
  }
  return <div>
    <h1>{title}</h1>
    <button onClick={up}>+</button> {count}
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
