import { useCallback } from 'react'
import { AsyncThunkAction, unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from '#/lib/state/store'

const useAsyncDispatch = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        <R,>(asyncThunk: AsyncThunkAction<R, any, any>): Promise<R> =>
            dispatch(asyncThunk).then(unwrapResult),
        [dispatch],
    )
}

export { useAsyncDispatch }
