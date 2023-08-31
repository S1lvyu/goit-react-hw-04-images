import React from 'react';
import { Vortex } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <Vortex
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
