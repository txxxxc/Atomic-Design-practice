/*
訂正：紙面掲載のコードにて、
import { containPresenter } from '../../utils/HoC.js';
という記述がありますが、このタイミングではこの 1 行は必要ありません。
記述するとエラーになりますので、この行は記述しないようにお願いします。
*/

import React from 'react';
import styles from './styles.css';

const HolyGrailLayoutPresenter = ({
  tag: Tag = 'div',
  parts,
  className,
  ...props
}) => {
  const { top, bottom, main, left, right } = parts;
  return (
    <Tag className={[styles.root, className].join('')}>
      {top}
      <div className={styles.body}>
        {main}
        {left}
        {right}
      </div>
      {bottom}
    </Tag>
  );
};

const HolyGrailLayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children);
  return presenter({ parts, ...props });
};

const partTypes = [
  'HolyGrailTop',
  'HolyGrailBottom',
  'HolyGrailMain',
  'HolyGrailLeft',
  'HolyGrailRight'
];
