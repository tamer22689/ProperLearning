import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../../model/User'


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    login: builder.mutation<User, {username: string, password: string}>({
      query: (data) => ({url:`login`,
    body:data,
    method: 'POST',
    }),
    }),
  }),
})

