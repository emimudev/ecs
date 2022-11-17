const { createSlice } = require('@reduxjs/toolkit')

export const motorcyclePostsSlice = createSlice({
  name: 'motorcyclePosts',
  initialState: {
    isFiltered: false,
    pageNumber: 0,
    totalPages: 0,
    motorcyclesData: []
  },
  reducers: {
    goToNextPage: (state) => {
      state.pageNumber += 1
    },
    goToPreviousPage: (state) => {
      state.pageNumber -= 1
    },
    changePage: (state, action) => {
      state.pageNumber = action.payload
    },
    defaultPage: (state) => {
      state.pageNumber = 0
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
    setMotorcyclesData: (state, action) => {
      state.motorcyclesData = action.payload
    },
    filter: (state) => {
      state.isFiltered = true
    },
    unFilter: (state) => {
      state.isFiltered = false
    }
  }
})
// TODO:Revisar el filtro cuendo se utiliza dos veces seguidas

export const {
  goToNextPage,
  goToPreviousPage,
  changePage,
  defaultPage,
  setTotalPages,
  setMotorcyclesData,
  filter,
  unFilter
} = motorcyclePostsSlice.actions

export default motorcyclePostsSlice.reducer
