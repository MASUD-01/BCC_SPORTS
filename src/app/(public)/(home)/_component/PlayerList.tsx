import React from 'react';

// 1. Define the Player Data Structure
const players = [
  {
    id: 1,
    name: 'Cody Fisher',
    number: '01345211652',
    role: 'Batter',
    roleColor: 'text-orange-500',
    status: 'Approved',
    statusClass: 'bg-green-600/10 text-green-600',
    team: 'India',
    teamIcon: 'india.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 2,
    name: 'Jerome Bell',
    number: '01819235689',
    role: 'Bowling',
    roleColor: 'text-cyan-500',
    status: 'Decline',
    statusClass: 'bg-red-600/10 text-red-600',
    team: 'Australia',
    teamIcon: 'australia.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 3,
    name: 'Jacob Jones',
    number: '01345211652',
    role: 'Batter',
    roleColor: 'text-orange-500',
    status: 'Approved',
    statusClass: 'bg-green-600/10 text-green-600',
    team: 'Bangladesh',
    teamIcon: 'bangladesh.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 4,
    name: 'Albert Flores',
    number: '01671942658',
    role: 'All-rounder',
    roleColor: 'text-blue-950',
    status: 'Pending',
    statusClass: 'bg-blue-700/10 text-blue-700',
    team: 'England',
    teamIcon: 'england.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 5,
    name: 'Theresa Webb',
    number: '01915257415',
    role: 'Bowling',
    roleColor: 'text-cyan-500',
    status: 'Approved',
    statusClass: 'bg-green-600/10 text-green-600',
    team: 'Australia',
    teamIcon: 'australia.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 6,
    name: 'Devon Lane',
    number: '01515320125',
    role: 'Fielder',
    roleColor: 'text-gray-600',
    status: 'Decline',
    statusClass: 'bg-red-600/10 text-red-600',
    team: 'India',
    teamIcon: 'india.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 7,
    name: 'Courtney Henry',
    number: '01717563256',
    role: 'All-rounder',
    roleColor: 'text-blue-950',
    status: 'Pending',
    statusClass: 'bg-blue-700/10 text-blue-700',
    team: 'Bangladesh',
    teamIcon: 'bangladesh.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 8,
    name: 'Ralph Edwards',
    number: '01671942658',
    role: 'Batter',
    roleColor: 'text-orange-500',
    status: 'Approved',
    statusClass: 'bg-green-600/10 text-green-600',
    team: 'England',
    teamIcon: 'england.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 9,
    name: 'Wade Warren',
    number: '01915257415',
    role: 'Batter',
    roleColor: 'text-orange-500',
    status: 'Pending',
    statusClass: 'bg-blue-700/10 text-blue-700',
    team: 'Australia',
    teamIcon: 'australia.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
  {
    id: 10,
    name: 'Arlene McCoy',
    number: '01819235689',
    role: 'Wicket Keeper',
    roleColor: 'text-teal-950',
    status: 'Approved',
    statusClass: 'bg-green-600/10 text-green-600',
    team: 'India',
    teamIcon: 'india.svg',
    photoUrl: 'https://placehold.co/32x32',
  },
];

// 2. Reusable Component for a Single Player Row
const PlayerRow = ({ player }: any) => {
  // Note: Since Image component and specific team flag logic is complex,
  // we use placeholders for simplicity but use the correct structure.

  // A utility function to map team names to the background/icon structure
  const getTeamIconClasses = (teamName: any) => {
    // This is where you'd have logic to render the specific flag JSX.
    // For now, we'll return a simple placeholder structure.
    switch (teamName) {
      case 'India':
        // Return simplified JSX for India flag structure
        return (
          <div className='w-6 h-6 relative overflow-hidden'>
            {/* Simplified Placeholder for India's flag structure */}
            <div className='w-full h-full bg-gradient-to-t from-lime-400 via-white to-yellow-500 rounded-full flex items-center justify-center'>
              <div className='w-2 h-2 rounded-full bg-blue-500' />
            </div>
          </div>
        );
      case 'Australia':
        // Return simplified JSX for Australia flag structure
        return (
          <div className='w-6 h-6 relative overflow-hidden'>
            <div className='w-full h-full bg-blue-800 rounded-full flex items-center justify-center'>
              <div className='w-3 h-3 bg-white rounded-full' />
            </div>
          </div>
        );
      case 'Bangladesh':
        // Return simplified JSX for Bangladesh flag structure
        return (
          <div className='w-6 h-6 relative overflow-hidden'>
            <div className='w-full h-full bg-green-700 rounded-full flex items-center justify-center'>
              <div className='w-3 h-3 bg-rose-500 rounded-full' />
            </div>
          </div>
        );
      case 'England':
        // Return simplified JSX for England flag structure
        return (
          <div className='w-6 h-6 relative overflow-hidden'>
            <div className='w-full h-full bg-blue-800 rounded-full flex items-center justify-center'>
              <div className='w-3 h-3 bg-red-500' />
            </div>
          </div>
        );
      default:
        return <div className='w-6 h-6 bg-gray-300 rounded-full' />;
    }
  };

  return (
    <React.Fragment>
      {/* Photo Column Data */}
      <div className='w-20 px-1 py-3 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex justify-start items-center gap-2'>
          <img
            className='w-8 h-8 rounded border border-gray-200'
            src={player.photoUrl}
            alt={`${player.name} photo`}
          />
        </div>
      </div>

      {/* Name Column Data */}
      <div className='flex-1 px-1 py-3 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex justify-start items-center gap-2'>
          <div className="justify-start text-gray-800 text-base font-medium font-['Montserrat'] leading-5">
            {player.name}
          </div>
        </div>
      </div>

      {/* Number Column Data */}
      <div className='flex-1 p-1 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex justify-start items-center gap-2.5'>
          <div className="justify-start text-gray-600 text-base font-normal font-['Montserrat'] leading-6">
            {player.number}
          </div>
        </div>
      </div>

      {/* Role Column Data */}
      <div className='flex-1 p-1 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex justify-start items-center gap-2.5'>
          <div
            className={`justify-start text-base font-normal font-['Montserrat'] leading-6 ${player.roleColor}`}
          >
            {player.role}
          </div>
        </div>
      </div>

      {/* Status Column Data */}
      <div className='flex-1 px-1 py-3 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        <div
          className={`px-4 py-2 rounded-xl flex justify-start items-center gap-2 ${player.statusClass}`}
        >
          <div className="justify-start text-sm font-medium font-['Montserrat'] leading-5">
            {player.status}
          </div>
        </div>
      </div>

      {/* Team Column Data */}
      <div className='flex-1 px-1 py-3 bg-white border-b border-neutral-200 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
        {getTeamIconClasses(player.team)}
        <div className="justify-start text-gray-600 text-base font-normal font-['Montserrat'] leading-6">
          {player.team}
        </div>
      </div>
    </React.Fragment>
  );
};

// 3. Main PlayerList Component with Dynamic Rendering
const PlayerList = () => {
  // Define the column headers structure
  const headers = [
    { name: 'Photo', widthClass: 'w-20' },
    { name: 'Name', widthClass: 'flex-1' },
    { name: 'Number', widthClass: 'flex-1' },
    { name: 'Role', widthClass: 'flex-1' },
    { name: 'Status', widthClass: 'flex-1' },
    { name: 'Team', widthClass: 'flex-1 rounded-tr-lg rounded-br-lg' },
  ];

  // Note: The whole table structure needs to be wrapped in a single flex container to achieve the column layout.
  // To properly use `map`, we'll structure the JSX to iterate over the headers and then iterate over the data.

  return (
    <>
      <div className='self-stretch p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200'>
        {/* Table Header Row Container */}
        <div className='w-full inline-flex justify-start items-start'>
          {headers.map((header) => (
            <div
              key={header.name}
              className={`${header.widthClass} px-2 py-3 bg-gray-200 outline outline-1 outline-offset-[-1px] inline-flex justify-start items-center gap-2.5 overflow-hidden`}
            >
              <div className="justify-start text-gray-800 text-base font-normal font-['Montserrat'] leading-6">
                {header.name}
              </div>
            </div>
          ))}
        </div>

        {/* Player Data Rows Container */}
        <div
          className='w-full grid'
          style={{ gridTemplateColumns: '80px repeat(5, minmax(0, 1fr))' }}
        >
          {players.map((player) => (
            // We render all PlayerRow fragments into a single row using the CSS Grid approach
            <PlayerRow key={player.id} player={player} />
          ))}
        </div>
      </div>

      <div className='self-stretch inline-flex justify-between items-center'>
        <div className="justify-start text-zinc-900 text-lg font-medium font-['Montserrat'] leading-6">
          Showing 1 to 10 of 24 orders
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-7 h-9 relative rounded-tl-lg rounded-bl-lg border-l border-t border-b border-neutral-200 overflow-hidden'>
            <div
              data-style='Outlined'
              className='w-0 h-5 left-[24px] top-[9px] absolute origin-top-left rotate-90 overflow-hidden'
            >
              <div className='w-1.5 h-2.5 left-[6.91px] top-[5px] absolute bg-orange-400' />
            </div>
          </div>
          <div className='w-9 h-9 relative border-l border-t border-b border-neutral-200 overflow-hidden'>
            <div className="left-[16px] top-[8px] absolute justify-start text-black text-base font-medium font-['Montserrat'] leading-5">
              1
            </div>
          </div>
          <div className='w-9 h-9 relative border-l border-t border-b border-neutral-200 overflow-hidden'>
            <div className="left-[14px] top-[8px] absolute justify-start text-black text-base font-medium font-['Montserrat'] leading-5">
              2
            </div>
          </div>
          <div className='w-9 h-9 relative border-l border-t border-b border-neutral-200 overflow-hidden'>
            <div className="left-[14px] top-[8px] absolute justify-start text-black text-base font-medium font-['Montserrat'] leading-5">
              3
            </div>
          </div>
          <div className='w-7 h-9 relative origin-top-left rotate-180 rounded-tl-lg rounded-bl-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden'>
            <div
              data-style='Outlined'
              className='w-0 h-5 left-[23px] top-[9px] absolute origin-top-left rotate-90 overflow-hidden'
            >
              <div className='w-1.5 h-2.5 left-[6.91px] top-[5px] absolute bg-orange-400' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerList;
