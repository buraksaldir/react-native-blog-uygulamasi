import { createSlice } from '@reduxjs/toolkit'
import {
  authSignInUser,
  authSignOutUser,
  authSignUpUser,
  authStateChangeUser,
  removeAvatarFromServer,
  uploadAvatarToServer,
} from './authOperations'

const initialState = {
  nickName: null,
  userEmail: null,
  userId: null,
  userPhoto: null,
  stateChange: false,
  error: false,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

    //Üye olmak
      .addCase(authSignUpUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(
        authSignUpUser.fulfilled,
        (state, { payload: { displayName, uid, photoURL, email } }) => {
          state.isLoading = false
          state.error = null
          state.userId = uid
          state.nickName = displayName
          state.userPhoto = photoURL
          state.userEmail = email
        }
      )
      .addCase(authSignUpUser.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

// Kayıt olmak
      .addCase(authSignInUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(
        authSignInUser.fulfilled,
        (state, { payload: { displayName, uid, email, photoURL } }) => {
          state.isLoading = false
          state.error = null
          state.userId = uid
          state.nickName = displayName
          state.userPhoto = photoURL
          state.userEmail = email
        }
      )
      .addCase(authSignInUser.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

// Oturumu Kapat
      .addCase(authSignOutUser.pending, (store, action) => {
        store.isLoading = true
      })
      .addCase(authSignOutUser.fulfilled, (state, action) => initialState)
      .addCase(authSignOutUser.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

      // Kimlik doğrulama durumu değişikliği/yenileme
      .addCase(authStateChangeUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(
        authStateChangeUser.fulfilled,
        (state, { payload: { displayName, uid, email, photoURL } }) => {
          state.isLoading = false
          state.error = null
          state.stateChange = true
          state.userId = uid
          state.nickName = displayName
          state.userPhoto = photoURL
          state.userEmail = email
        }
      )
      .addCase(authStateChangeUser.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

     // Avatarı yükle
      .addCase(uploadAvatarToServer.pending, (state, _) => {
        state.isLoading = true
      })
      .addCase(uploadAvatarToServer.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.userPhoto = payload
      })
      .addCase(uploadAvatarToServer.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

   // Avatarı kaldır
      .addCase(removeAvatarFromServer.pending, (state, _) => {
        state.isLoading = true
      })
      .addCase(removeAvatarFromServer.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.userPhoto = null
      })
      .addCase(removeAvatarFromServer.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  },
})

export const authReducer = authSlice.reducer
