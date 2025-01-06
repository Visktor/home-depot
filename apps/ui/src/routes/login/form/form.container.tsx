import { useSelector } from 'react-redux'
import { sliceLoginForm, setPasswordVisibility, reset } from './form.state'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SERVICES } from '#/services/main'
import { SCHEMAS, TSCHEMAS } from '#/lib/schema/global'
import { useAppDispatch } from '#/lib/state/store'
import { useEffect } from 'react'

function useLoginForm() {
    const { isLoading, isPasswordVisible } = useSelector(
        sliceLoginForm.selectSlice,
    )

    const dispatch = useAppDispatch()

    const form = useForm({
        defaultValues: SCHEMAS.login.getDefault(),
        resolver: yupResolver(SCHEMAS.login),
    })

    const onSubmit = async (data: TSCHEMAS['login']) => {
        const { payload } = await dispatch(SERVICES.login.login(data))
    }

    useEffect(
        () => () => {
            dispatch(reset())
        },
        [dispatch],
    )

    return {
        isLoading,
        form,
        onSubmit,
        isPasswordVisible,
        onEyeIconClick: () => dispatch(setPasswordVisibility()),
    }
}

export { useLoginForm }
