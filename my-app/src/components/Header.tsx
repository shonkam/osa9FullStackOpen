import React from 'react';
import { headerProps } from '../types';

const Header = (props: headerProps): JSX.Element => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;