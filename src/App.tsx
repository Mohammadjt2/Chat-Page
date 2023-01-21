import React from 'react';
import './App.css';
import NavBar from "./Components/NanBar/NavBar"
import Content from "./Components/Content/Content"


const App = () => {
  return (
    <div className='app'>
      <div className='Components'>
      <NavBar />
      <Content />
      </div>
    </div>
  )
}

export default App