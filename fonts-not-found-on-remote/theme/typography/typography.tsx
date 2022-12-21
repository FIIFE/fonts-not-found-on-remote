import React from 'react';
import './styles.css';

export function Typography() {
  return (
    <div style={{ fontSize: '25px' }}>
      <div>The quick brown fox jumps over the lazy dog</div>
      <div style={{ fontFamily: 'Lato' }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontFamily: 'DM Serif Text' }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontFamily: 'Sarabun' }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
}
