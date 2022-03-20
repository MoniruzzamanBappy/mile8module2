import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Aman', 'opu', 'badhon', 'utpol'];
  const gf=['nipa', 'mim', 'mousumi', 'nai']
  return (
    <div className="App">
      {/* {
        nayoks.map(nayok=><Friend name={nayok} ></Friend>)
      }
      <Bappy></Bappy>
      <Friend name={nayoks[0]} GF={gf[0]}></Friend>

      <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    console.log("ekrhgkeusnubr");
  },[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Bappy(){
  return (
    <div className='abc-bappy'>
      <h1>hello there!</h1>
      <h5>duluzhyd</h5>
    </div>
  )
}

function Friend(props){
  return (
    <div className='abc-bappy'>
      <h1>{props.name}</h1>
      <h5>{props.GF}</h5>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  const countIncrement = ()=> setCount(count+1);
  const countDecrement = ()=> setCount(count-1);
  // const countIncrement = ()=>{
  //   const newCount = count+1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={countIncrement}>Increse</button>
      <button onClick={countDecrement}>Decrese</button>
    </div>
  )
}

export default App;
