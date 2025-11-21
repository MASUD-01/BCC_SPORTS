import { baseApi } from '../redux/RTK_API';

export interface MatchTeam {
  id: number;
  name: string;
  logo: string;
}

export interface TournamentMatch {
  id: number;
  team_a: MatchTeam;
  team_b: MatchTeam;
  title: string;
  match_date_time: string;
  venue: string;
  result: string | null;
  team_a_score: number | null;
  team_b_score: number | null;
  tournament: number;
}

export type TournamentMatchList = TournamentMatch;

export const CommonAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<any, FormData>({
      query: (body) => {
        return {
          url: `/b2c/profile`,
          method: 'PATCH',
          body: body,
        };
      },

      invalidatesTags: ['PROFILE_UPDATE'],
    }),
    getRoles: builder.query<
      {
        id: number;
        name: string;
        category: string;
      }[],
      void
    >({
      query: () => ({
        url: '/roles',
        method: 'GET',
      }),
      providesTags: ['BCC'],
    }),
    getPlayer: builder.query<
      {
        id: number;
        role: {
          id: number;
          name: string;
          category: string;
        };
        team: {
          id: number;
          name: string;
          logo: string;
        };
        name: string;
        phone: string;
        image: string;
        bkash_transaction_id: string;
        status: string;
        tournament: number;
      }[],
      { bkash_transaction_id?: number; tournament?: number; phone?: string }
    >({
      query: (params) => ({
        url: '/players',
        method: 'GET',
        params,
      }),
      providesTags: ['BCC'],
    }),
    teamWisePlayerList: builder.query<
      {
        id: number;
        role: {
          id: number;
          name: string;
          category: string;
        };
        team: {
          id: number;
          name: string;
          logo: string;
        };
        name: string;
        phone: string;
        image: string;
        bkash_transaction_id: string;
        status: string;
        tournament: number;
      }[],
      {
        team?: number;
        tournament?: number;
      }
    >({
      query: (params) => ({
        url: '/players/',
        method: 'GET',
        params,
      }),
      providesTags: ['BCC'],
    }),
    getPlayerCheck: builder.query<
      {
        id: number;
        role: {
          id: number;
          name: string;
          category: string;
        };
        team: {
          id: number;
          name: string;
          logo: string;
        };
        name: string;
        phone: string;
        image: string;
        bkash_transaction_id: string;
        status: string;
        tournament: number;
      }[],
      { bkash_transaction_id?: string; tournament?: string; phone?: string }
    >({
      query: (params) => ({
        url: '/players/check-status',
        method: 'GET',
        params,
      }),
      providesTags: ['BCC'],
    }),
    getTeams: builder.query<
      {
        id: number;
        name: string;
        logo: string;
      }[],
      void
    >({
      query: () => ({
        url: '/teams',
        method: 'GET',
      }),
      providesTags: ['BCC'],
    }),
    matchFixtures: builder.query<
      TournamentMatchList[],
      {
        team?: number;
        tournament?: number;
      }
    >({
      query: (params) => ({
        url: '/match-fixtures/',
        method: 'GET',
        params,
      }),
      providesTags: ['BCC'],
    }),
    getHeroSection: builder.query<
      {
        id: number;
        title: string;
        subtitle: string;
        background_image: string;
      }[],
      void
    >({
      query: () => ({
        url: '/hero-sections/',
        method: 'GET',
      }),
      providesTags: ['BCC'],
    }),

    getTournament: builder.query<
      {
        id: number;
        tournament_rules: {
          title: string;
          rules: {
            rule: string;
          }[];
        }[];
        last_champion: {
          id: number;
          name: string;
          logo: string;
        };
        name: string;
        description: string;
        registration_process: string;
        category: string;
        venue: string;
        is_active: boolean;
        start_date: string;
        end_date: string;
        registration_start: string;
        registration_end: string;
        created_at: string;
        updated_at: string;
      }[],
      {
        is_active?: boolean;
      }
    >({
      query: (params) => ({
        url: '/tournaments',
        method: 'GET',
        params,
      }),
      providesTags: ['BCC'],
    }),
    createRegistration: builder.mutation<
      {
        id: number;
        name: string;
        phone: string;
        image: string;
        bkash_transaction_id: string;
        status: string;
        tournament: number;
        team: number;
        role: number;
      },
      FormData
    >({
      query: (body) => {
        return {
          url: `/players/`,
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: ['BCC'],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useCreateRegistrationMutation,
  useGetRolesQuery,
  useGetTeamsQuery,
  useGetTournamentQuery,
  useGetPlayerQuery,
  useLazyGetPlayerCheckQuery,
  useMatchFixturesQuery,
  useLazyMatchFixturesQuery,
  useLazyTeamWisePlayerListQuery,
  useGetHeroSectionQuery,
} = CommonAPI;
