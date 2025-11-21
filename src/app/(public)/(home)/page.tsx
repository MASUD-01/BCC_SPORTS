'use client';

import GlobalLoading from '@/app/loading';
import { useGetTournamentQuery } from '@/lib/APIs/common-api';
import Image from 'next/image';
import Link from 'next/link';
import AnnounceBoard from './_component/AnnounceBoard';
import TournamentGallery from './_component/TournamentGallery';
import FNSTournament from './_component/FNSTournament';

export default function Home() {
  const { data: touranment, isLoading } = useGetTournamentQuery({ is_active: true });

  if (isLoading) {
    return <GlobalLoading />;
  }
  return (
    <main className='min-h-screen flex flex-col'>
      {/* 🌟 Hero Section */}

      {touranment && touranment?.length === 0 ? (
        <TournamentGallery />
      ) : (
        <>
          <section
            style={{ backgroundImage: "url('/bccImages/bg.jpg')" }}
            className='relative w-full bg-cover bg-center h-[800px]'
          >
            <div className='flex justify-center items-center mt-5'>
              <Image
                src={'/bccImages/logo.jpg'}
                alt={'logo'}
                width={100}
                height={30}
                className='object-contain'
              />
            </div>
            {/* <div className='relative z-20'>
          <BCCHeader />
        </div> */}
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/10 z-10'></div>

            {/* Content */}
            <div className='relative z-10 container mx-auto px-5 py-10 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between text-white gap-10'>
              {/* Left Text */}
              <div className='w-full text-center md:text-left space-y-5'>
                <div className='text-4xl w-full sm:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-wide text-[#E1E100] leading-tight'>
                  <div className='flex items-baseline justify-start'>
                    <Image
                      src='/bccImages/Rectangle.svg'
                      width={50}
                      height={60}
                      alt='Tournament Cup'
                      className='mr-3 w-6 md:w-14'
                    />
                    BCC Fan’s
                  </div>
                  Tournament - 2025
                </div>

                <p className='text-lg sm:text-2xl text-neutral-100 leading-relaxed'>
                  arranged by - BCC Borogangdia Cricket Club
                </p>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start gap-2 md:gap-4'>
                  {(() => {
                    const endDate = touranment?.[0]?.registration_end;
                    const isValidDate = endDate && new Date(endDate) >= new Date();

                    return isValidDate ? (
                      <Link href='/sing-up' className='w-full md:w-auto cursor-pointer'>
                        <button className='px-6 py-3 w-full min-w-[187px] bg-[#E1E100] text-blue-950 font-semibold rounded-lg hover:bg-yellow-300 transition'>
                          Register Now
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          const element = document.getElementById('announce-board');
                          if (element) {
                            const y = element.getBoundingClientRect().top + window.pageYOffset;

                            // Dynamic offset based on screen width
                            const offset = window.innerWidth >= 1024 ? 300 : 50; // 270 for large, 150 for small screens

                            window.scrollTo({ top: y - offset, behavior: 'smooth' });
                          }
                        }}
                        className='px-6 cursor-pointer py-3 w-full md:w-auto min-w-[187px] bg-[#E1E100] text-blue-950 font-semibold rounded-lg hover:bg-yellow-300 transition'
                      >
                        View Details
                      </button>
                    );
                  })()}

                  <a
                    href='https://www.facebook.com/profile.php?id=61580442497092&rdid=Mwt89colY2i2BPE6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CwBRmv4eF%2F#'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='px-6 cursor-pointer py-3 w-full md:w-auto min-w-[187px] border border-white text-white rounded-lg hover:bg-white hover:text-black transition'>
                      Visit Facebook Page
                    </button>
                  </a>
                </div>
              </div>

              {/* Right Images */}
              <div className='relative w-full md:w-1/2 flex justify-center'>
                <div className='relative w-[250px] sm:w-[300px] lg:w-[400px] flex flex-col items-center'>
                  {/* Cup Image */}
                  <Image
                    src='/bccImages/cup_with.png'
                    alt='Tournament Cup'
                    width={400}
                    height={400}
                    className='w-full relative z-10'
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          {/* 📢 Announce Board */}
          <AnnounceBoard
            id='announce-board'
            tournament_rules={(touranment && touranment[0].tournament_rules) || []}
          />
          <FNSTournament showHeader={true} />
          {/* <BCCMemberList />

      <BCCBlog />
      <BCCPhotglarry />
      <Banner />

      <PowerHouseBCC /> */}
        </>
      )}
    </main>
  );
}
