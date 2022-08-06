import * as React from 'react';
import '../style.css';

export interface IOpenClosedHeaderProps {
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}

export default function OpenClosedHeader(
  props: React.PropsWithChildren<IOpenClosedHeaderProps>
) {
  return (
    <div className="header">
      <div className="header-left-content">{props.renderLeft?.()}</div>
      {props.children}
      <div className="header-right-content">{props.renderRight?.()}</div>
    </div>
  );
}
