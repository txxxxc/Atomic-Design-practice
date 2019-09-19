import React from 'react';
import styles from './styles.css';
import HoverTipInteraction, { Tip, Marker } from '../HoverTipInteraction/index';

const Balloon = ({ children, className, ...props }) => (
  <span className={[styles.balloon, className].join(' ')} {...props}>
    {children}
  </span>
);

export const BalloonTip = ({ children, label, className, ...props }) => (
  <HoverTipInteraction className={className} {...props}>
    <Marker>
      <span>{chidlren}</span>
    </Marker>
    <Tip>
      <Balloon>{label}</Balloon>
    </Tip>
  </HoverTipInteraction>
);

export default Balloon;
