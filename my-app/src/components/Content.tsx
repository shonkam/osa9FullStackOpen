import React from 'react';
import { courseProps } from '../types';

const Content = (props: courseProps): JSX.Element => {
  return (
    <div>
      {props.name} {props.exerciseCount}
    </div>
  );
};

export default Content;