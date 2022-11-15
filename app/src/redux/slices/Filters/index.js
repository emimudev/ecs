const { createSlice } = require('@reduxjs/toolkit')

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    type: 'cars',
    model: '',
    yearValues: [1996, 2022],
    minYear: 1996,
    maxYear: 2022,
    priceValues: [1000000, 150000000],
    minPrice: 1000000,
    maxPrice: 150000000,
    brandValues: [],
    province: '',
    carsStyles: ''
  },
  reducers: {
    setModel: (state, action) => {
      state.model = action.payload
    },
    setYearValues: (state, action) => {
      state.yearValues = action.payload
    },
    setBrandValues: (state, action) => {
      state.brandValues = action.payload
    },
    setPriceValues: (state, action) => {
      state.priceValues = action.payload
    },
    setProvince: (state, action) => {
      state.province = action.payload
    },
    setCarsStyles: (state, action) => {
      state.carsStyles = action.payload
    },
    setMotorcycle: (state) => {
      state.type = 'motorcycle'
      state.model = ''
      state.yearValues = [1996, 2022]
      state.minYear = 1996
      state.maxYear = 2022
      state.priceValues = [100000, 50000000]
      state.minPrice = 100000
      state.maxPrice = 50000000
      state.brandValues = []
      state.province = ''
      state.carsStyles = ''
    },
    setCars: (state) => {
      state.type = 'cars'
      state.model = ''
      state.yearValues = [1996, 2022]
      state.minYear = 1996
      state.maxYear = 2022
      state.priceValues = [1000000, 150000000]
      state.minPrice = 1000000
      state.maxPrice = 150000000
      state.brandValues = []
      state.province = ''
      state.carsStyles = ''
    },
    resetFilters: (state) => {
      state.model = ''
      state.yearValues = [1996, 2022]
      state.priceValues = [1000000, 150000000]
      state.brandValues = []
      state.province = ''
      state.carsStyles = ''
    }
  }
})

export const {
  setModel,
  setYearValues,
  setPriceValues,
  setBrandValues,
  setProvince,
  setCarsStyles,
  resetFilters,
  setCars,
  setMotorcycle
} = filterSlice.actions

export default filterSlice.reducer
