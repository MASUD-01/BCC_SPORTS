import Image from 'next/image';
import React from 'react';

interface TournamentRule {
  rule: string;
}

interface TournamentRuleGroup {
  title: string;
  rules: TournamentRule[];
}

interface Props {
  tournament_rules: TournamentRuleGroup[];
  id: string;
}

const AnnounceBoard = ({ tournament_rules, id }: Props) => {
  return (
    <section id={id} className='py-16 relative text-center bg-cover bg-center px-4 sm:px-6 lg:px-0'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center -z-10'
        style={{
          backgroundImage: "url('/bccImages/announceBoard.png')",
          transform: 'rotate(180deg)',
        }}
      />

      {/* Heading */}
      <h2 className='text-4xl md:text-5xl font-bebas font-bold text-blue-950 flex justify-center items-center gap-3'>
        Announce Board
        <Image width={40} height={30} src='/bccImages/announce.png' alt='icon' />
      </h2>

      <p className='text-3xl md:text-4xl font-bebas font-bold text-orange-500 mt-2'>
        Rules of BCC Fan’s Tournament - 2025
      </p>

      {/* RULE GROUPS */}
      <div className='mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-5xl mx-auto text-left'>
        {tournament_rules?.map((group, index) => (
          <div
            key={index}
            className={`
              space-y-3 sm:space-y-4 text-base sm:text-lg leading-6 sm:leading-7
              ${index % 2 === 0 ? 'md:border-r md:border-gray-500 md:pr-5' : 'md:pl-5'}
            `}
          >
            {/* Group Title */}
            <p className='font-semibold'>{group.title}</p>

            {/* Rules – showing SL exactly as provided */}
            <div className='space-y-2'>
              {group.rules?.map((item, i) => (
                <p key={i} className='flex gap-2'>
                  {/* No auto-numbering. Full text shown. */}
                  {item.rule}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnounceBoard;
