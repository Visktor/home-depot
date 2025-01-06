import { SERVICES_STATUS } from '#/services/main'
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isPasswordVisible: false
}

const sliceLoginForm = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    selectors: {
        isLoading: state => state.isLoading,
    },
    extraReducers: builder =>
        builder
            .addMatcher(
                isAnyOf(...SERVICES_STATUS.login.pending.all),
                state => {
                    state.isLoading = true
                },
            )
            .addMatcher(
                isAnyOf(...SERVICES_STATUS.login.settled.all),
                state => {
                    state.isLoading = false
                },
            ),
})

const reducer = sliceLoginForm.reducer

export { reducer as reducer_loginForm, sliceLoginForm }
