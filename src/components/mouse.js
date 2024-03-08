import React, { useState, useEffect } from 'react';

const CursorBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    position: 'fixed',
    width: 'max(283vw, 283vh)',
    height: 'max(283vw, 283vh)',
    background: 'radial-gradient(circle,rgb(28, 28, 128) 0%,  rgb(0, 0, 0) 15%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    zIndex: '-1',
    left: position.x,
    top: position.y,
  };

  return (
    <div style={style} />
  );
};

export default CursorBackground;
