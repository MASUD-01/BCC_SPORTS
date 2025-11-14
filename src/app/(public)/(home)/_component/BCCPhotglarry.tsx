import React from 'react';

const BCCPhotglarry = () => {
  return (
    <section className='py-20 bg-orange-50 text-center'>
      <div className='container mx-auto space-y-5'>
        <h2 className='text-6xl font-bebas font-bold text-blue-950'>BCC Photo Gallery</h2>
        <p className='text-lg text-gray-700 font-semibold'>
          Photo gallery of BCC. We are together, We are rivals, We are power.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {[...Array(8)].map((_, i) => {
            const isSecondRow = i >= 3 && i <= 5;

            return (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden bg-gradient-to-b from-black/0 to-black/40  ${i === 3 ? 'col-span-2 grid-' : ''}`}
                style={{
                  height: isSecondRow ? '280px' : '280px', // 👈 second row smaller
                }}
              >
                <img
                  src={`https://placehold.co/400x400?text=Photo+${i + 1}`}
                  alt={`Gallery ${i + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            );
          })}
        </div>
        <button className='px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400'>
          View All
        </button>
      </div>
    </section>
  );
};

export default BCCPhotglarry;
