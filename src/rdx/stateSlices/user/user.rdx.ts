import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../model/User'

export interface ICurrentUserSlice { currentUser: User, loggedIn: boolean }

const initialState: ICurrentUserSlice = {
  currentUser: {
    email: '',
    firstname: '',
    lastname: '',
    isAdmin: false,
    password: '',
    username: '',
    id: '',
    courses: []
  },
  loggedIn: false
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers:
  {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },

    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },

    reset(state) {
      state.currentUser = initialState.currentUser
      state.loggedIn = false
    }

  }
})

export const userActions = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer

