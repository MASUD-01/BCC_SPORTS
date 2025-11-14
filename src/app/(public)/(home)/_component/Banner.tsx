import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(238 27 36)',
      }}
    >
      <div
        style={{
          backgroundImage: "url('/bccImages/robi.png')",
          height: '200px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
    </div>
  );
};

export default Banner;
