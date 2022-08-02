import * as React from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import Logo from './Logo';
import '../style.css';

// export default function HeaderWrong() {
//   return (
//     <div className="header">
//       <div className="header-left-content">
//         <FaBars color="white" size={24} />
//       </div>
//       <Logo />
//     </div>
//   );
// }

interface IHeaderWrong {
  title?: string;
  showMenuIcon?: boolean;
  showArrowBackIcon?: boolean;
  onClickMenu?: () => void;
  onClickArrowBack?: () => void;
}

export default function HeaderWrong({
  title,
  showMenuIcon,
  onClickMenu,
  showArrowBackIcon,
  onClickArrowBack,
}: IHeaderWrong) {
  return (
    <div className="header">
      {showMenuIcon && (
        <div className="header-left-content">
          <FaBars color="white" size={24} onClick={onClickMenu} />
        </div>
      )}
      {showArrowBackIcon && (
        <div className="header-left-content">
          <FaArrowLeft color="white" size={18} onClick={onClickArrowBack} />
        </div>
      )}
      {title ? <h4 className="header-title">{title}</h4> : <Logo />}
      {/* right content here? */}
    </div>
  );
}
