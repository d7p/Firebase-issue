import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getUser, User} from 'firebase-reuse-issue/index';
import {db, functions} from './firebaseSetup';
import {httpsCallable} from 'firebase/functions';

function App() {
  const callUI = () => {
getUser("bob", db)
  .then(user => {
    console.log(`user name is: ${user.userName}`);
  }).catch( err => {
    console.error(err);
  });
};
const callBackend = () => {
  const getusersBackend = httpsCallable(functions, "getUsers");
  getusersBackend({username:"bob"})
    .then( res => {
      const resUser = res.data as User;
     console.log(resUser.userName);
    })
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>CLick below to call the same function in the UI (frondend) or in firebase functions (Backend)</p>
      <p>open the console to see results and errors</p>
      <button onClick={callBackend}>Backend</button>
      <button onClick={callUI}>Froundend</button>
    </div>
  );
}

export default App;
