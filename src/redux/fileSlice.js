import { createSlice } from '@reduxjs/toolkit'

export const fileSlice = createSlice({
  name: 'file',
  initialState: {
    file: '',
    sign: '',
  },
  reducers: {
    updateFile: (state, action) => {
      state.file = action.payload
    },
    updateSign: (state, action) => {
      state.sign = action.payload
    },
  },
})
export const { updateFile, updateSign } = fileSlice.actions
export default fileSlice.reducer
