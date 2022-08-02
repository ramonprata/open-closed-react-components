import * as React from 'react';
import HeaderWrong from './components/HeaderWrong';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <div className="screen">
          <HeaderWrong />
          <div className="divider" />
          <HeaderWrong showMenuIcon />
          <div className="divider" />
          <HeaderWrong showArrowBackIcon />
          <div className="divider" />
          <HeaderWrong showArrowBackIcon title="Title" />
        </div>
      </div>
    </div>
  );
}
