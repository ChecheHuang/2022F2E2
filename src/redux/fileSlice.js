import { createSlice } from '@reduxjs/toolkit'

export const fileSlice = createSlice({
  name: 'file',
  initialState: {
    file: '',
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.file = action.payload
    },
    updateError: (state) => {
      state.error = true
      state.pending = false
    },
  },
})
export const { updateStart, updateSuccess, updateError } = fileSlice.actions
export default fileSlice.reducer
