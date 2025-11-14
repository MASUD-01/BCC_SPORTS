const Footer = () => {
  return (
    <footer className='bg-green-900 text-white py-12'>
      <div className='container mx-auto w-full flex flex-wrap justify-between items-start gap-10'>
        {/* LEFT SECTION */}
        <div className='w-64 flex flex-col gap-6'>
          <img className='w-16 h-14' src='https://placehold.co/61x60' />
          <div className='text-xl font-medium'>BCC</div>
          <div className='text-sm font-medium'>Passion - Unity - Victory</div>
          <div className='text-base font-medium'>
            Borogangdia Cricket Club is dedicated to excellence in cricket, fostering talent, and
            building a strong community of passionate players and supporters.
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className='w-40 flex flex-col gap-10'>
          <div className='text-xl font-bold'>Quick link</div>
          <div className='flex flex-col gap-4'>
            <div className='text-lg'>Player list</div>
            <div className='text-lg'>Contact us</div>
            <div className='text-lg'>Fan’s tournament</div>
            <div className='text-lg'>Photo Gallery</div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='w-64 flex flex-col gap-10'>
          <div className='text-xl font-bold'>Contact Us</div>

          <div className='flex flex-col gap-6'>
            {/* Email */}
            <div className='flex items-center gap-2.5'>
              <div className='w-6 h-6 relative'>
                <div className='w-5 h-3.5 absolute left-[2.25px] top-[4.5px] outline outline-[1.5px] outline-white' />
              </div>
              <div className='text-lg'>bcc@gmail.com</div>
            </div>

            {/* Location */}
            <div className='flex items-start gap-2.5'>
              <div className='w-6 h-6 relative'>
                <div className='w-1.5 h-1.5 absolute left-[9px] top-[7.5px] outline outline-[1.5px] outline-white' />
                <div className='w-3.5 h-5 absolute left-[4.5px] top-[3px] outline outline-[1.5px] outline-white' />
              </div>
              <div className='w-56 text-lg'>Borogangdia Nasir uddin bissas college field</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT SECTION */}
      <div className='container mx-auto mt-10 pt-6 border-t border-white/30 text-center'>
        <p className='text-sm md:text-base font-medium'>
          2024 All Rights Reserved by BCC / Borogangdia Cricket Club
        </p>
      </div>
    </footer>
  );
};

export default Footer;
