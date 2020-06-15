import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // sub class 생성자 정의
  constructor(props) {
    super(props); // 항상 super 메서드 명시
    this.state = {
      value: null,
    };
  }

    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      ); // square 클릭시 X값으로 바뀌게하기
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />; // value값을 전달받을 수 있게
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  