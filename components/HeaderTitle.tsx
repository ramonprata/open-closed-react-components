import * as React from 'react';
import '../style.css';
import OpenClosedHeader, { IOpenClosedHeaderProps } from './OpenClosedHeader';

export interface IHeaderTitleProps extends IOpenClosedHeaderProps {
  title: string | React.ReactElement;
}

export default function HeaderTitle({
  title,
  ...headerProps
}: React.PropsWithChildren<IHeaderTitleProps>) {
  const titleRender =
    typeof title === 'string' ? (
      <h4 className="header-title">{title}</h4>
    ) : (
      title
    );
  return <OpenClosedHeader {...headerProps}>{titleRender}</OpenClosedHeader>;
}
