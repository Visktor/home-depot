import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

const sliceLoginForm = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {},
})

const reducer = sliceLoginForm.reducer

export { reducer as reducerLoginForm }
