import React from 'react';
import CustomPersonal from './CustomPersonal';
import DefaultPersonal from './DefaultPersonal';

export default function index() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <DefaultPersonal />
      <CustomPersonal />
    </div>
  );
}
