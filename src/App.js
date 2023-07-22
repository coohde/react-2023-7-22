import './App.css';
function Counter(){
  return <div>
    <h1>카운터</h1>
    <button>+</button> 0 
  </div>
}
function App() {
  return (
    <div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
