import React from 'react';
import './App.css';
import Form from './components/Form';
import styled from 'styled-components'


function App() {

  const Credit = styled.span`
      position: fixed;
      bottom: 0;
      left: 0;
      height: 40px;
      padding: 10px;
      background-color: #333;
      display: flex;
      color: #fff;
      font-weight: bold;
      align-items: center;
  `

  const Link = styled.a`
      text-decoration:none;
      color: yellow;
  `

  return (
    <div className="App">
        <Form />
        <Credit>Created by Facundo Lavagnino<Link href="http://www.github.com/Facundolavtech" target="no-target-blank"> GitHub</Link>
        </Credit>
    </div>
  );
}

export default App;
