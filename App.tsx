import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>sausigc</h1>
      <p style={{ color: 'black' }}>eat my cock</p>
      <Chessboard />
    </div>
  );
}

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link link="http://google.com" name="Google" />
    </div>
  );
};

const Link = (props) => {
  return (
    <div>
      <a style={{ textDecoration: 'none', color: '#3af2cd' }} href={props.link}>
        {props.name}
      </a>
    </div>
  );
};

const Boardpiece = (props) => {
  return (
    <div
      style={{
        margin: 0,
        border: 0,
        backgroundColor: props.color,
        width: 75,
        height: 75,
        display: 'inline-block',
      }}
    >
      <button></button>
    </div>
  );
};

let checkerPieces = [];

const checkerpieces = () => {
  let i = 0;
  while (i < 32) {
    checkerPieces.push('green');
    checkerPieces.push('white');
    i++;
  }
};
const checkerlist = checkerPieces.map((item, index) => {
  return <Boardpiece color={checkerPieces[index]} />;
});

const Chessboard = (props) => {
  return (
    <div
      style={{
        height: 600,
        width: 600,
        backgroundColor: 'black',
        display: 'inline-block',
      }}
    >
      {checkerlist}
    </div>
  );
};
