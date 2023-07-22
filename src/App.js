import './App.css';
import {useState} from 'react';
function Counter(props){
  let countState = useState(props.initValue);
  let count = countState[0];
  let setCount = countState[1];
  function up(){
    setCount(count+1);
  }
  return <div>
    <h1>{props.title}</h1>
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
