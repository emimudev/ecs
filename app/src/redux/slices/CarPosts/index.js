const { createSlice } = require('@reduxjs/toolkit')

export const carPostsSlice = createSlice({
  name: 'carPosts',
  initialState: {
    isFiltered: false,
    pageNumber: 0,
    totalPages: 0,
    carsData: []
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
    setCarData: (state, action) => {
      state.carsData = action.payload
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
  setCarData,
  filter,
  unFilter
} = carPostsSlice.actions

export default carPostsSlice.reducer
