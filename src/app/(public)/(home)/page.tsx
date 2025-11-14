import BCCHeader from '@/app/(public)/(home)/_component/BCCHeader';
import type { Metadata } from 'next';
import Image from 'next/image';
import AnnounceBoard from './_component/AnnounceBoard';
import BCCMemberList from './_component/BCCMemberList';
import BCCBlog from './_component/BCCBlog';
import BCCPhotglarry from './_component/BCCPhotglarry';
import Banner from './_component/Banner';
import PowerHouseBCC from './_component/PowerHouseBCC';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Bangladesh',
    template: '%s',
  },
  description:
    'SOHI provides premium airport services in Bangladesh, including Meet & Assist, Lounge booking, and Luggage Wrapping at Dhaka Airport.',
  keywords: [
    'Dhaka airport services',
    'meet and greet Dhaka',
    'airport lounge Dhaka',
    'luggage wrapping Dhaka',
  ],
  openGraph: {
    title: 'Bangladesh',
    description:
      'Premium airport services in Dhaka: Meet & Assist, Lounge booking, and Luggage Wrapping.',
    url: 'https://sohi.com.bd',
    siteName: 'SOHI Bangladesh',
    images: [
      {
        url: 'https://sohi.com.bd/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      {/* 🌟 Hero Section */}
      <section
        style={{ backgroundImage: "url('/bccImages/bg.jpg')" }}
        className='relative w-full bg-cover bg-center h-[800px]'
      >
        <div className='relative z-20'>
          <BCCHeader />
        </div>
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

            <div className='flex flex-wrap justify-center md:justify-start gap-2 md:gap-4'>
              <Link href='/sing-up'>
                <button className='px-6 py-3 w-full md:w-fit bg-[#E1E100] text-blue-950 font-semibold rounded-lg hover:bg-yellow-300 transition'>
                  Register Now
                </button>
              </Link>

              <button className='px-6 w-full md:w-fit py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition'>
                Visit Facebook Page
              </button>
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
      <AnnounceBoard />

      {/* 🏏 Member List */}
      <BCCMemberList />
      {/* 🖼 Gallery */}
      <BCCBlog />
      <BCCPhotglarry />
      <Banner />
      {/* ⚡ Powerhouse */}
      <PowerHouseBCC />
    </main>
  );
}
