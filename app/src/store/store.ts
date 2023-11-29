import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/store/features'

export const store = configureStore({
	reducer: {
		user: userReducer
	},
})
