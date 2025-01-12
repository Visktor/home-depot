import { SERVICES } from '#/services/main'
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isPasswordVisible: false,
}

const sliceLoginForm = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        reset: () => initialState,
        setPasswordVisibility: state => {
            state.isPasswordVisible = !state.isPasswordVisible
        },
    },
    selectors: {
        isLoading: state => state.isLoading,
    },
    extraReducers: builder =>
        builder
            .addMatcher(
                isAnyOf(...SERVICES.login.statuses.pending.all),
                state => {
                    state.isLoading = true
                },
            )
            .addMatcher(
                isAnyOf(...SERVICES.login.statuses.settled.all),
                state => {
                    state.isLoading = false
                },
            ),
})

const reducer = sliceLoginForm.reducer

export const { setPasswordVisibility, reset } = sliceLoginForm.actions

export { reducer as reducer_loginForm, sliceLoginForm }
