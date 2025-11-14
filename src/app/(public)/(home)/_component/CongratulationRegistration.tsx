import React from 'react';

const CongratulationRegistration = () => {
  return (
    <div className='container'>
      <div
        style={{
          backgroundImage: "url('/bccImages/congratuation.png')",
          backgroundSize: 'contain', // image fully visible
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '80%',
          height: '100vh', // full screen height (change if needed)
        }}
        className='mx-auto'
      ></div>
    </div>
  );
};

export default CongratulationRegistration;
