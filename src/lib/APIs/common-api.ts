import { baseApi } from '../redux/RTK_API';

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
    }),
    getTournament: builder.query<
      {
        id: 1;
        tournament_rules: {
          title: string;
          rules: string[];
        }[];
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
      void
    >({
      query: () => ({
        url: '/tournaments',
        method: 'GET',
      }),
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
      invalidatesTags: [],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useCreateRegistrationMutation,
  useGetRolesQuery,
  useGetTeamsQuery,
  useGetTournamentQuery,
} = CommonAPI;
