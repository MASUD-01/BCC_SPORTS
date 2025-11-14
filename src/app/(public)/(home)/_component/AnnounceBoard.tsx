import Image from 'next/image';
import React from 'react';

const AnnounceBoard = () => {
  return (
    <section className='py-20 relative text-center bg-cover bg-center'>
      <div
        className='absolute inset-0 bg-cover bg-center -z-10'
        style={{
          backgroundImage: "url('/bccImages/announceBoard.png')",
          transform: 'rotate(180deg)',
        }}
      />
      <h2 className='text-5xl font-bebas font-bold text-blue-950 flex justify-center items-center gap-3'>
        Announce Board
        <Image width={50} height={40} src='/bccImages/announce.png' alt='icon' />
      </h2>
      <p className='text-4xl font-bebas font-bold text-orange-500 mt-2'>
        Rules of BCC Fan’s Tournament - 2025
      </p>

      <div className='mt-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left'>
        {[1, 2].map((col, idx) => (
          <div
            key={col}
            className={`space-y-4 text-lg leading-7 ${idx === 0 ? 'md:border-r md:border-gray-500 pr-5' : 'pl-5'}`}
          >
            <p>
              একজন ফ্যান হিসেবে এই টুর্নামেন্টে রেজিস্ট্রেশন করতে আপনাকে যে নিয়ম গুলো মানতে হবে:
            </p>
            <ol className='list-decimal list-inside space-y-2'>
              <li> আপনি প্রথম যে টিমে রেজিস্ট্রেশন করবেন সেটা চূড়ান্ত বলে গণ্য হবে।</li>
              <li>রেজিস্ট্রেশন ফি বাবদ ৫০ টাকা জমা দিতে হবে।</li>
              <li>রেজিস্ট্রেশনের পর অনুপস্থিত থাকলে কমিটিকে জানাতে হবে।</li>
              <li>শেষ তারিখ - ২৬/১১/২০২৩ রাতঃ ১১ঃ৫৯।</li>
              <li>কমিটির সিদ্ধান্ত মেনে নিতে হবে।</li>
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnounceBoard;
