import { configureStore } from '@reduxjs/toolkit'

import isAutheReducer from '../slices/AuthSlice'

 const store = configureStore({
  reducer: {
    user : isAutheReducer
  },
})

export default store