import React from 'react';
import './style/App.css';
import Tetris from "./components/Tetris"
import GameBoard from "./components/GameBoard";
import Popup from "./components/Popup"
import Stage from './components/Stage'
import Score from "./components/Score"
import useGameBoard from './hooks/useGameBoard'

function App() {
  const {layoutReady} = useGameBoard()
  return (
    <GameBoard>
      {layoutReady ? null : <Popup txt="loading..." className="loading"/>}
      <Tetris>
        <Stage/>
        <Score/>
      </Tetris>) 
    </GameBoard>
      
  );
}

export default App;
