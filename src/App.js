 import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState();
const [fullname, setFullname] = useState();

const onSubmit = () =>{
setFullname(name);
}

  const inputEvent = (event) =>{
    setName(event.target.value);
  }

  return (
<>
<h1>Hello {fullname} </h1>
<input type="text" placholder="Enter name" value={name} onChange={inputEvent}/>
  <button onClick={onSubmit}>Click here 😄</button>
</>
  );
}

export default App;
