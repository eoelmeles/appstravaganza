import { api } from '../../api';

export type User = {
  id: number;
  name: string;
};

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
    signUp: build.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyLoginQuery, useLazySignUpQuery } = authApi;
