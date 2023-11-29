import { TUserSignUp } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signUpThunk = createAsyncThunk('user/signUp', (dto: TUserSignUp) => {
	
})