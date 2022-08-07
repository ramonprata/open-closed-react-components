import * as React from 'react';
import { FaHeart, FaHeadphones } from 'react-icons/fa';
import HeaderTitle from './components/HeaderTitle';
import HeaderNavigation from './components/HeaderNavigation';
import OpenClosedHeader from './components/OpenClosedHeader';
import './style.css';

export default function App() {
  const renderRight = () => {
    return (
      <div className="header-more">
        <div className="icon">
          <FaHeart color="white" size={16} />
        </div>
        <div className="icon">
          <FaHeadphones color="white" size={16} />
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="frame">
        <div className="screen">
          <HeaderTitle title="Header title" />

          <div className="divider" />

          {
            <HeaderNavigation
              showLogo
              onNavigateBack={() => {}}
              renderRight={renderRight}
            />
          }

          <div className="divider" />

          <HeaderNavigation onNavigateBack={() => {}}>
            {/* children here */}
            <div className="input-container">
              <input type="text" className="input" placeholder="Type here.." />
            </div>
          </HeaderNavigation>
        </div>
      </div>
    </div>
  );
}
