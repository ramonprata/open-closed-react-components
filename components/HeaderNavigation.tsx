import * as React from 'react';
import '../style.css';
import { FaArrowLeft } from 'react-icons/fa';
import OpenClosedHeader, { IOpenClosedHeaderProps } from './OpenClosedHeader';
import Logo from './Logo';

interface IHeaderNavigationProps extends IOpenClosedHeaderProps {
  onNavigateBack: () => void;
  showLogo?: boolean;
}

export default function HeaderNavigation({
  showLogo,
  onNavigateBack,
  children,
  ...headerProps
}: React.PropsWithChildren<IHeaderNavigationProps>) {
  const renderArrowBack = () => (
    <FaArrowLeft color="white" size={24} onClick={onNavigateBack} />
  );

  return (
    <OpenClosedHeader renderLeft={renderArrowBack} {...headerProps}>
      {showLogo ? <Logo /> : children}
    </OpenClosedHeader>
  );
}
