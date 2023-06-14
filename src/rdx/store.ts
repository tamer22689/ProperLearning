import { configureStore } from '@reduxjs/toolkit'
import { currentUserReducer } from './stateSlices/user/user.rdx'
import { userApi } from './apis/user.api'

export const store = configureStore({
  reducer: {
    rdxCurrentUser : currentUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch