'use client';
import React from 'react';
import BCCHeader from '../(home)/_component/BCCHeader';
import Image from 'next/image';
import PlayerPage from '../(home)/_component/PlayerPage';
import { useGetTeamsQuery, useGetTournamentQuery } from '@/lib/APIs/common-api';

const FNSTournament = ({ showHeader = false }: { showHeader?: boolean }) => {
  const { data: touranment } = useGetTournamentQuery({ is_active: true });
  const { data: teams } = useGetTeamsQuery();

  const startDate = touranment?.[0]?.start_date;
  const endDate = touranment?.[0]?.end_date;

  const formatDate = (dateString: any) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const formattedStart = formatDate(startDate); // "Dec 16"
  const formattedEnd = formatDate(endDate);
  return (
    <div className='my-10'>
      {!showHeader && <BCCHeader />}

      {/* 🔥 Fixed Background Wrapper */}
      <div
        className='w-full relative flex justify-center items-center  mx-auto min-h-[400px] mt-10'
        style={{
          backgroundImage: "url('/bccImages/fans_tournament.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
        }}
      >
        {/* Full Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r h-full min-h-[400px] from-teal-950/90 to-teal-950/70' />

        {/* Content */}
        <div className='relative z-10 flex flex-col justify-start items-center gap-10 w-full max-w-5xl px-4 mx-auto py-10'>
          <div className='flex flex-col justify-start items-center gap-1'>
            {/* Responsive Text Scaling */}
            <div className="text-center text-neutral-50 text-4xl md:text-6xl font-normal font-['Bebas_Neue']">
              {touranment?.[0]?.name || "BCC Fan's Tournament - 2025"}
            </div>
            <div className="text-center text-yellow-400 text-xl md:text-2xl font-light font-['Onest']">
              Arranged by BCC - Passion - Unity - Victory
            </div>
          </div>

          {/* 🔥 Cards Container (Increased gap for 4-column layout) */}
          {/* 🔥 Cards Container (Responsive 4-column grid) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
            {/* --- Venue Card --- */}
            <div className='px-4 py-3 bg-white/10 rounded-lg flex flex-col justify-start items-center gap-2'>
              <div className='w-10 h-10 relative overflow-hidden'>
                <Image alt='1' height={30} width={30} src={'/bccImages/Frame.svg'} />
              </div>
              <div className='flex flex-col justify-start items-center gap-1'>
                <div className="text-center text-white text-base font-light font-['Onest']">
                  Venue
                </div>
                <div className="text-center text-yellow-400 text-sm font-normal font-['Onest']">
                  {touranment?.[0]?.venue}
                </div>
              </div>
            </div>

            {/* --- Date Range --- */}
            <div className='px-4 py-3 bg-white/10 rounded-lg flex flex-col justify-start items-center gap-2'>
              <div className='w-10 h-10 relative overflow-hidden'>
                <Image alt='1' height={30} width={30} src={'/bccImages/Frame (1).svg'} />
              </div>
              <div className='flex flex-col justify-start items-center gap-1'>
                <div className="text-center text-white text-base font-light font-['Onest']">
                  Date range
                </div>
                <div className="text-center text-yellow-400 text-lg font-normal font-['Onest']">
                  {formattedStart.split(' ')[0]}, {formattedStart.split(' ')[1]} -{' '}
                  {formattedEnd.split(' ')[1]}
                </div>
              </div>
            </div>

            {/* --- Teams Card --- */}
            <div className='px-4 py-3 bg-white/10 rounded-lg flex flex-col justify-start items-center gap-2'>
              <div className='w-10 h-10 relative overflow-hidden'>
                <Image alt='1' height={30} width={30} src={'/bccImages/Frame (2).svg'} />
              </div>
              <div className='flex flex-col justify-start items-center gap-1'>
                <div className="text-center text-white text-base font-light font-['Onest']">
                  Teams
                </div>
                <div className="text-center text-yellow-400 text-lg font-normal font-['Onest']">
                  {teams?.length || 0}
                </div>
              </div>
            </div>

            {/* --- Running Champion --- */}
            <div className='px-4 py-3 bg-white/10 rounded-lg flex flex-col justify-start items-center gap-2'>
              <div className='w-10 h-10 relative overflow-hidden'>
                <Image
                  alt='1'
                  height={60}
                  width={60}
                  src={(touranment && touranment[0]?.last_champion?.logo) || ''}
                />
              </div>
              <div className='flex flex-col justify-start items-center gap-1'>
                <div className="text-center text-white text-base font-light font-['Onest']">
                  Running Champion
                </div>
                <div className="text-center text-yellow-400 text-lg font-normal font-['Onest']">
                  {(touranment && touranment[0]?.last_champion?.name) || 'Last Champion'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlayerPage />
    </div>
  );
};

export default FNSTournament;
