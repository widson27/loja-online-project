import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StyledDiv isBlue={count > 4} className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledDiv>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

interface PStyledLink {
  isBlue?: boolean;
}

const StyledDiv = styled.div<PStyledLink>`
  background-color: ${(props) => (props.isBlue ? 'blue' : 'pink')};
  border-radius: 24px;
`;

export default App;
