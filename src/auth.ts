import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        user_or_email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (credentials) => {
        const { user_or_email, password } = credentials ?? {};
        if (!user_or_email || !password) return null;

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/b2c/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_or_email, password }),
        });

        if (!res.ok) return null;

        const userInfo: any = await res.json();
        if (!userInfo?.success || !userInfo?.data) {
          return null;
        }

        return {
          ...userInfo.data,
          token: userInfo.token ?? '',
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        Object.assign(token, user);
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...(token as any) };
      return session;
    },
  },
});
