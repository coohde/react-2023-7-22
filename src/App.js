import { Container, Grid } from '@mui/material';
import './App.css';
import {useState, useEffect} from 'react';
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5,5]);
  function up(){
    const newCount = count + step;
    setCount(newCount);
    const newHistory = [...history];
    newHistory.push(newCount);
    setHistory(newHistory);
  }
  const stepHandler = (evt) => {
    setStep(Number(evt.target.value));
  };
  const style = { border: '10px solid black', padding:10, backgroundColor:'tomato' };
  return <div style={style}>
    <h1>{title}</h1>
    <button onClick={up}>+</button> 
    <input type="number" value={step} onChange={stepHandler}/>
    {count}
    <ol>
      {history.map((e,index)=><li key={index}>{e}</li>)}
    </ol>
  </div>
}
function CounterUseEffect(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('useEffect');
    const id = setInterval(()=>{
      console.log('interval');
      setCount(oldCount=>oldCount+1);
    }, 1000)
    return ()=>{
      console.log('clean');
      clearInterval(id);
    }
  },[]);
  const style = { border: '10px solid black', padding:10 };
  return <div style={style}>
    <h1>useEffect Counter</h1> {count}
  </div>
}
function App() {
  return (
    <Container>
      <Grid container maxWidth="xl">
        <Grid item xs={12} sm={6} md={3}>
          <Counter title="불면증 카운터" initValue={10}></Counter>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CounterUseEffect></CounterUseEffect>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CounterUseEffect></CounterUseEffect>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CounterUseEffect></CounterUseEffect>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
