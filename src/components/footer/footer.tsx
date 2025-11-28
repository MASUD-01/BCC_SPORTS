import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-0'>
      <div className='container mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-10'>
        {/* LEFT SECTION */}
        <div className='flex-1 flex flex-col gap-6'>
          <div className='flex gap-x-2 items-center'>
            <Image width={70} height={30} alt='logo_png' src='/bccImages/logo_png.png' />
            <div className='text-xl font-medium'>
              BCC
              <div className='text-sm font-medium'>Passion - Unity - Victory</div>
            </div>
          </div>

          <div className='text-base font-medium'>
            Borogangdia Cricket Club is dedicated to excellence in cricket, fostering talent, and
            building a strong community of passionate players and supporters.
          </div>
        </div>

        {/* MIDDLE SECTION */}
        {/* <div className='flex-1 flex flex-col gap-6'>
          <div className='text-xl font-bold'>Quick Links</div>
          <div className='flex flex-col gap-3'>
            <a href='#' className='text-lg hover:text-orange-500 transition'>
              Player List
            </a>
            <a href='#' className='text-lg hover:text-orange-500 transition'>
              Contact Us
            </a>
            <a href='#' className='text-lg hover:text-orange-500 transition'>
              Fan’s Tournament
            </a>
            <a href='#' className='text-lg hover:text-orange-500 transition'>
              Photo Gallery
            </a>
          </div>
        </div> */}
        <div></div>
        {/* RIGHT SECTION */}
        <div className='flex-1 flex flex-col gap-6'>
          <div className='text-xl font-bold'>Contact Us</div>
          <div className='flex flex-col gap-4'>
            {/* Email */}
            <div className='flex items-center gap-2'>
              <HiOutlineMail size={20} />
              <span className='text-lg'>mail@bcc.com.bd</span>
            </div>

            {/* Location */}
            <div className='flex items-start gap-2'>
              <HiOutlineLocationMarker size={20} className='mt-1' />
              <span className='text-lg'>Borogangdia Nasir Uddin Bissas College Field</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className='flex gap-4 mt-2'>
            <a
              href='https://www.facebook.com/profile.php?id=61580442497092&rdid=Mwt89colY2i2BPE6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CwBRmv4eF%2F#'
              target='_blank'
              rel='noreferrer'
              className='hover:text-orange-500 transition'
            >
              <FaFacebookF size={20} />
            </a>
            {/* <a
              href='https://www.facebook.com/profile.php?id=61580442497092&rdid=Mwt89colY2i2BPE6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CwBRmv4eF%2F#'
              target='_blank'
              rel='noreferrer'
              className='hover:text-orange-500 transition'
            >
              <FaInstagram size={20} />
            </a> */}
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT SECTION */}
      <div className='container mx-auto mt-10 pt-6 border-t border-white/30 text-center'>
        <p className='text-sm md:text-base font-medium'>
          2025 All Rights Reserved by BCC / Borogangdia Cricket Club
        </p>
      </div>
    </footer>
  );
};

export default Footer;
