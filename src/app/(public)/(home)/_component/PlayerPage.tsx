'use client';

import { useEffect, useState } from 'react';
import {
  useGetPlayerQuery,
  useGetTeamsQuery,
  useGetTournamentQuery,
  useLazyGetPlayerCheckQuery,
  useLazyMatchFixturesQuery,
  useLazyTeamWisePlayerListQuery,
  useMatchFixturesQuery,
} from '@/lib/APIs/common-api';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

const PlayerPage = () => {
  const [activeTab, setActiveTab] = useState('players'); // active tab state
  const { data: teams } = useGetTeamsQuery();
  const { data: matchFixtures } = useMatchFixturesQuery({});
  const { data: touranment } = useGetTournamentQuery({ is_active: true });
  const isActiveTournamentId = touranment?.find((t) => t.is_active)?.id;
  return (
    <div className='container mx-auto flex flex-col items-center gap-6 md:gap-8'>
      <PlayerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='w-full max-w-6xl'>
        {activeTab === 'players' && <PlayerList />}
        {activeTab === 'status' && <CheckStatus />}
        {activeTab === 'team_list' && (
          <TeamList teams={teams} isActiveTournamentId={isActiveTournamentId} />
        )}
        {activeTab === 'MatchFixtures' && <MatchFixtures fixtures={matchFixtures} />}
      </div>
    </div>
  );
};

export default PlayerPage;
const MatchFixtures = ({ fixtures }: any) => {
  if (!fixtures) return null;

  const formatDate = (dateString: any) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: any) => {
    const d = new Date(dateString);
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
      {fixtures.map((match: any) => (
        <div
          key={match.id}
          className='bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-5 hover:shadow-lg transition'
        >
          {/* LEFT SIDE - MATCH TITLE & DATE */}
          <div className='flex flex-col items-start'>
            <h3 className='text-xl font-semibold text-gray-900'>{match.title}</h3>
            <p className='text-gray-600 text-sm mt-1'>
              {formatDate(match.match_date_time)} • {formatTime(match.match_date_time)}
            </p>
            <p className='text-gray-500 text-sm'>{match.venue}</p>
          </div>

          {/* CENTER - LOGOS & VS */}
          <div className='flex items-center gap-4'>
            {/* Team A */}
            <div className='flex flex-col items-center'>
              <div className='relative w-14 h-14'>
                <Image
                  src={match.team_a.logo}
                  alt={match.team_a.name}
                  fill
                  className='object-contain rounded'
                />
              </div>
              <span className='text-sm font-semibold mt-1'>{match.team_a.name}</span>
            </div>

            <span className='text-lg font-bold text-gray-800'>VS</span>

            {/* Team B */}
            <div className='flex flex-col items-center'>
              <div className='relative w-14 h-14'>
                <Image
                  src={match.team_b.logo}
                  alt={match.team_b.name}
                  fill
                  className='object-contain rounded'
                />
              </div>
              <span className='text-sm font-semibold mt-1'>{match.team_b.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// --------------------- Tabs ---------------------
interface PlayerTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PlayerTabs = ({ activeTab, setActiveTab }: PlayerTabsProps) => {
  const tabs = [
    { id: 'players', label: 'Player List' },
    { id: 'team_list', label: 'Team List' },
    { id: 'MatchFixtures', label: 'Match Fixtures' },
    { id: 'status', label: 'Check Your Status' },
  ];

  return (
    <div className='border-b border-gray-200 w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 flex justify-center items-center cursor-pointer transition-all ${
            activeTab === tab.id ? 'border-b-4 border-orange-500' : 'border-b-4 border-transparent'
          }`}
        >
          <span
            className={`text-sm sm:text-base md:text-lg font-normal ${
              activeTab === tab.id ? 'text-orange-500' : 'text-blue-900'
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

// --------------------- Player List Table ---------------------
const PlayerList = () => {
  const { data, isLoading, isError, error } = useGetPlayerQuery({});

  if (isLoading) return <p className='text-center text-gray-500 py-10'>Loading players...</p>;

  if (isError)
    return (
      <p className='text-center text-red-600 py-10'>
        {(error as any)?.data?.message || 'Failed to load players.'}
      </p>
    );

  return (
    <div className='w-full overflow-x-auto shadow-md rounded-lg'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>SL</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>Photo</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-blue-950'>Name</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Number</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-orange-500'>Role</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-yellow-500'>Status</th>
            <th className='px-4 py-3 text-left text-sm font-medium text-indigo-600'>Team</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data?.map((player: any, index: number) => (
            <tr key={player?.id} className='hover:bg-gray-50 transition'>
              <td className='px-4 py-2 font-semibold text-gray-900'>{index + 1}</td>
              <td className='px-4 py-2'>
                {player?.image ? (
                  <img
                    src={player?.image}
                    alt={player?.name}
                    className='w-10 h-10 object-cover rounded-full'
                  />
                ) : (
                  '—'
                )}
              </td>
              <td className='px-4 py-2 text-blue-950 font-semibold'>{player?.name}</td>
              <td className='px-4 py-2 text-gray-700'>{player?.phone}</td>
              <td className='px-4 py-2 text-orange-500'>{player?.role?.name}</td>

              <td className='px-4 py-2 font-semibold'>
                <span
                  className={`
      px-3 py-1 rounded-full capitalize
      ${
        player?.status === 'pending'
          ? 'bg-yellow-100 text-yellow-700'
          : player?.status === 'approved'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
      }
    `}
                >
                  {player?.status}
                </span>
              </td>

              <td className='px-4 py-2 text-indigo-600 flex items-center gap-2'>
                {' '}
                <img
                  src={player?.team?.logo}
                  alt={player?.team?.name}
                  className='w-8 h-8 object-cover rounded-full'
                />
                {player?.team?.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --------------------- Check Status ---------------------

interface FilterValues {
  phone: string;
  bkash_transaction_id: string;
  tournament: string;
}

export const CheckStatus = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [checkStatus, { data: players, isLoading: isLoadingPlayers, isError }] =
    useLazyGetPlayerCheckQuery();
  const { data: tournaments, isLoading: isLoadingTournaments } = useGetTournamentQuery({
    is_active: true,
  });

  const [filters, setFilters] = useState<FilterValues>({
    phone: '',
    bkash_transaction_id: '',
    tournament: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage('');

    if (!filters.tournament) {
      setErrorMessage('Tournament is required.');
      return;
    }

    if (!filters.phone && !filters.bkash_transaction_id) {
      setErrorMessage('Please enter either Phone or Bkash Transaction ID.');
      return;
    }

    // Trigger lazy query with filters
    await checkStatus({
      tournament: filters.tournament,
      phone: filters.phone,
      bkash_transaction_id: filters.bkash_transaction_id,
    });
  };

  if (isLoadingPlayers || isLoadingTournaments)
    return <p className='text-center text-gray-500 py-10'>Loading...</p>;

  if (isError) return <p className='text-center text-red-600 py-10'>Failed to load data.</p>;

  return (
    <div className='w-full overflow-x-auto shadow-md rounded-lg p-4'>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-3 mb-4 items-end'>
        <div className='flex flex-col w-full md:w-1/3'>
          <label className='text-sm font-medium text-gray-700 mb-1'>Phone</label>
          <input
            type='text'
            name='phone'
            value={filters.phone}
            onChange={handleChange}
            placeholder='Enter phone'
            className='px-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-orange-500'
          />
        </div>
        <div className='flex flex-col w-full md:w-1/3'>
          <label className='text-sm font-medium text-gray-700 mb-1'>Bkash Transaction ID</label>
          <input
            type='text'
            name='bkash_transaction_id'
            value={filters.bkash_transaction_id}
            onChange={handleChange}
            placeholder='Enter Bkash Transaction ID'
            className='px-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-orange-500'
          />
        </div>
        <div className='flex flex-col w-full md:w-1/3'>
          <label className='text-sm font-medium text-gray-700 mb-1'>Tournament *</label>
          <select
            name='tournament'
            value={filters.tournament}
            onChange={handleChange}
            required
            className='px-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-orange-500'
          >
            <option value='' disabled>
              Select Tournament
            </option>
            {tournaments?.map((t: any) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition'
        >
          Search
        </button>
      </form>
      {errorMessage && <p className='text-center text-red-600 mb-2'>{errorMessage}</p>}

      {/* Table */}
      {!players || players.length === 0 ? (
        <p className='text-center text-gray-500 py-10'>Check your status...</p>
      ) : (
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>SL</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>Image</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-blue-950'>Name</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-yellow-500'>Status</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Phone</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-indigo-600'>Team</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-orange-500'>Role</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {players.map((player: any, index: number) => (
              <tr key={player?.id} className='hover:bg-gray-50 transition'>
                <td className='px-4 py-2 font-semibold text-gray-900'>{index + 1}</td>
                <td className='px-4 py-2'>
                  {player?.image ? (
                    <img
                      src={player?.image}
                      alt={player?.name}
                      className='w-12 h-12 object-cover rounded-full'
                    />
                  ) : (
                    '—'
                  )}
                </td>
                <td className='px-4 py-2 text-blue-950 text-sm md:font-semibold'>{player?.name}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    player?.status === 'pending'
                      ? 'text-yellow-500'
                      : player?.status === 'approved'
                        ? 'text-green-600'
                        : 'text-red-600'
                  }`}
                >
                  {player?.status}
                </td>
                <td className='px-4 py-2 text-gray-700'>{player?.phone}</td>
                <td className='px-4 py-2 text-indigo-600'>{player?.team?.name}</td>
                <td className='px-4 py-2 text-orange-500'>{player?.role?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// --------------------- Search Tab ---------------------
const TeamList = ({ teams, isActiveTournamentId }: any) => {
  const [open, setOpen] = useState(false);
  const [openTeamList, setOpenTeamList] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const tournamentId = isActiveTournamentId; // ⭐ Your tournament ID

  return (
    <>
      {/* DIALOG (shadcn/ui) */}

      {openTeamList ? (
        <Dialog open={open} onOpenChange={setOpen} modal>
          <DialogContent
            tabIndex={-1}
            onInteractOutside={(e) => e.preventDefault()}
            className='max-h-[80vh] w-full sm:max-w-5xl overflow-y-auto'
          >
            <DialogHeader>
              <DialogTitle>Team Player List</DialogTitle>
            </DialogHeader>
            <Separator />
            {selectedTeam && <TeamPlayerList teamId={selectedTeam} tournamentId={tournamentId} />}
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog open={open} onOpenChange={setOpen} modal>
          <DialogContent
            tabIndex={-1}
            onInteractOutside={(e) => e.preventDefault()}
            className='max-h-[80vh] w-full sm:max-w-5xl overflow-y-auto'
          >
            <DialogHeader>
              <DialogTitle>Match Fixture</DialogTitle>
            </DialogHeader>
            <Separator />
            {selectedTeam && <TeamMatchFixtures teamId={1} tournamentId={1} />}
          </DialogContent>
        </Dialog>
      )}

      {/* TEAM LIST */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 max-w-5xl mx-auto'>
        {teams?.map((team: any) => (
          <div key={team?.id} className='bg-white rounded-xl shadow-md p-4 flex flex-col gap-3'>
            {/* LOGO */}
            <div className='w-full h-24 relative rounded-lg overflow-hidden bg-gray-50 flex justify-start items-center'>
              <Image src={team?.logo} alt={team?.name} fill className='object-contain p-2' />
            </div>

            {/* NAME */}
            <h3 className='text-lg font-semibold text-gray-900 text-left'>{team?.name}</h3>

            {/* BUTTON */}
            <div className='flex justify-between'>
              <Button
                className='rounded-md'
                onClick={() => {
                  setSelectedTeam(team?.id);
                  setOpen(true);
                  setOpenTeamList(true);
                }}
              >
                Player List
              </Button>
              <Button
                className='rounded-md bg-white text-black border border-black bg:hover:none hover:text-white'
                onClick={() => {
                  setSelectedTeam(team?.id);
                  setOpenTeamList(false);
                  setOpen(true);
                }}
              >
                Match Fixture
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const TeamPlayerList = ({ teamId, tournamentId }: any) => {
  const [fetchTeamPlayers, { data, isLoading, isError }] = useLazyTeamWisePlayerListQuery();
  const [teamInfo, setTeamInfo] = useState<any>(null);

  useEffect(() => {
    if (teamId && tournamentId) {
      fetchTeamPlayers({
        team: teamId,
        tournament: tournamentId,
      })
        .unwrap()
        .then((res: any) => {
          if (res && res.length > 0) {
            setTeamInfo(res[0]?.team); // Assuming all players have same team info
          }
        });
    }
  }, [teamId, tournamentId, fetchTeamPlayers]);

  if (isLoading) return <p className='text-center py-5 text-gray-500'>Loading...</p>;
  if (isError) return <p className='text-center py-5 text-red-600'>Failed to load team players.</p>;
  if (!data || data.length === 0)
    return <p className='text-center py-5 text-gray-500'>No data available.</p>;

  return (
    <div className='w-full mt-4'>
      {/* Team Info & Total Players */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          {teamInfo?.logo && (
            <img
              src={teamInfo.logo}
              alt={teamInfo.name}
              className='w-12 h-12 object-cover rounded-full'
            />
          )}
          <h2 className='text-xl font-semibold text-gray-900'>{teamInfo?.name}</h2>
        </div>
        <div className='text-gray-700 font-medium'>
          Total Players: <span className='font-semibold'>{data.length}</span>
        </div>
      </div>

      {/* Player Table */}
      <div className='shadow-md rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>SL</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-900'>Photo</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-blue-950'>Name</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Number</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-orange-500'>Role</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-yellow-500'>Status</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-indigo-600'>Team</th>
            </tr>
          </thead>

          <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((player: any, index: number) => (
              <tr key={player?.id} className='hover:bg-gray-50 transition'>
                <td className='px-4 py-2 font-semibold text-gray-900'>{index + 1}</td>
                <td className='px-4 py-2'>
                  {player?.image ? (
                    <img
                      src={player?.image}
                      alt={player?.name}
                      className='w-12 h-12 object-cover rounded-full'
                    />
                  ) : (
                    '—'
                  )}
                </td>
                <td className='px-4 py-2 text-blue-950 font-semibold'>{player?.name}</td>
                <td className='px-4 py-2 text-gray-700'>{player?.phone}</td>
                <td className='px-4 py-2 text-orange-500'>{player?.role?.name}</td>
                <td className='px-4 py-2 font-semibold'>
                  <span
                    className={`px-3 py-1 rounded-full capitalize ${
                      player?.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : player?.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {player?.status}
                  </span>
                </td>
                <td className='px-4 py-2 text-indigo-600 flex items-center gap-2'>
                  {player?.team?.logo && (
                    <img
                      src={player?.team?.logo}
                      alt={player?.team?.name}
                      className='w-8 h-8 object-cover rounded-full'
                    />
                  )}
                  {player?.team?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface TeamMatchFixturesProps {
  teamId: number;
  tournamentId: number;
}

export const TeamMatchFixtures = ({ teamId, tournamentId }: TeamMatchFixturesProps) => {
  const [fixtures, setFixtures] = useState<any[] | null>(null); // ← set initial null
  const [fetchFixtures, { isLoading, isError }] = useLazyMatchFixturesQuery();

  useEffect(() => {
    if (teamId && tournamentId) {
      setFixtures(null); // reset to null when fetching new data
      fetchFixtures({ team: teamId, tournament: tournamentId })
        .unwrap()
        .then((res: any) => setFixtures(res))
        .catch(() => setFixtures([]));
    }
  }, [teamId, tournamentId, fetchFixtures]);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  // ✅ Correct rendering logic
  if (isLoading || fixtures === null) {
    return <p className='text-center py-5 text-gray-500'>Loading fixtures...</p>;
  }

  if (isError) {
    return <p className='text-center py-5 text-red-600'>Failed to load fixtures.</p>;
  }

  if (fixtures.length === 0) {
    return <p className='text-center py-5 text-gray-500'>No fixtures available.</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
      {fixtures.map((match: any) => (
        <div
          key={match.id}
          className='bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-lg transition'
        >
          {/* Left: Match Info */}
          <div className='flex flex-col items-start'>
            <h3 className='text-lg font-semibold text-gray-900'>{match.title}</h3>
            <p className='text-gray-600 text-sm'>
              {formatDate(match.match_date_time)} • {formatTime(match.match_date_time)}
            </p>
            <p className='text-gray-500 text-sm'>{match.venue}</p>
          </div>

          {/* Right: Teams */}
          <div className='flex items-center gap-4'>
            <div className='flex flex-col items-center'>
              <div className='relative w-12 h-12'>
                <Image
                  src={match.team_a.logo}
                  alt={match.team_a.name}
                  fill
                  className='object-contain rounded'
                />
              </div>
              <span className='text-sm font-semibold mt-1'>{match.team_a.name}</span>
            </div>

            <span className='text-lg font-bold text-gray-800'>VS</span>

            <div className='flex flex-col items-center'>
              <div className='relative w-12 h-12'>
                <Image
                  src={match.team_b.logo}
                  alt={match.team_b.name}
                  fill
                  className='object-contain rounded'
                />
              </div>
              <span className='text-sm font-semibold mt-1'>{match.team_b.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
