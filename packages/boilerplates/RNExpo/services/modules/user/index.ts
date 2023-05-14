import { api } from '../../api';

export type User = {
  id: number;
  name: string;
};

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserInfoQuery } = userApi;
