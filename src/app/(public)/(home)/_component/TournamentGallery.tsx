'use client';

import React from 'react';
import Image from 'next/image';
import { useGetHeroSectionQuery } from '@/lib/APIs/common-api';
import GlobalLoading from '@/app/loading';

const TournamentGallery = () => {
  const { data, isLoading, isError } = useGetHeroSectionQuery();

  if (isLoading) return <GlobalLoading />;

  if (isError)
    return <p className='text-center py-10 text-red-600 font-medium'>Failed to load images.</p>;

  return (
    <div className='w-full'>
      {data?.map((item: any) => (
        <div key={item.id} className='w-full overflow-hidden shadow-lg'>
          <Image
            src={item.background_image}
            alt={item.title}
            width={1920}
            height={900} // FULL BIG HEIGHT WORKS 100%
            className='w-full h-auto object-cover'
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default TournamentGallery;
