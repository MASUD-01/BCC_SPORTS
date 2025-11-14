import React from 'react';

const BCCMemberList = () => {
  return (
    <section
      className='py-20 z-20 bg-[#EFFFFD]'
      style={{
        backgroundImage: "url('/bccImages/bcc_membersection.png')",
        //   transform: 'rotate(180deg)',
      }}
    >
      <div className='container mx-auto text-center space-y-8'>
        <div>
          <h2 className='text-6xl font-bebas font-bold text-blue-950'>BCC Member List</h2>
          <p className='text-lg font-semibold text-gray-600'>
            Talented athletes dedicated to cricket excellence
          </p>
        </div>

        <div className='flex justify-center gap-8 border-b pb-4'>
          {['All Player', 'Cricket', 'Football', 'Badminton'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 font-onest ${
                i === 0 ? 'border-b-4 border-orange-500 text-orange-500' : 'text-blue-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10'>
          {[...Array(12)].map((_, i) => (
            <div key={i} className='relative rounded-lg overflow-hidden'>
              <img
                src='https://placehold.co/300x400'
                alt='player'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white'>
                <h4 className='font-semibold'>Istiak Turjo</h4>
                <p className='text-sm'>Wicket Keeper</p>
              </div>
            </div>
          ))}
        </div>
        <button className='px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400'>
          View All
        </button>
      </div>
    </section>
  );
};

export default BCCMemberList;
