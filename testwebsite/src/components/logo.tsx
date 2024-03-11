import React from 'react';

const TextComponent: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '0px', textAlign: 'center' }}>
      <div style={{ color: 'white', fontSize: '32px' }}>
        Med<span style={{ color: 'blue' }}>InT</span>ech
      </div>
      <div style={{ color: 'white', fontSize: '16px' }}>
        MD-SA-300
      </div>
    </div>
  );
};

export default TextComponent;
