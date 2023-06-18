import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Course } from '../../model/Course'


// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], undefined>({
      query: () => `courses`
    ,
    }),
    getCourseById:builder.query<Course,string>({
        query:(id)=>`course/${id}`
    }),
  }),
})

