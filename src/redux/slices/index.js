import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload
    },
  },
})

export const { setProjects } = rootSlice.actions

export default rootSlice.reducer


