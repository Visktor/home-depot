import { Button, Input } from '@nextui-org/react'
import { Form, useForm } from 'react-hook-form'
import { defaulsLoginForm } from '../../../lib/schema/login'

function LoginForm() {
    const form = useForm({
        defaultValues: defaulsLoginForm,
    })

    return (
        <div className="flex w-full flex-col gap-4 bg-red-100">
            <Form {...form}>
                <div className="flex flex-col gap-2">
                    <Input label="Email" {...form.register('email')} />
                    <Input
                        type={'password'}
                        label="Password"
                        {...form.register('password')}
                    />
                </div>
                <div className="flex justify-end">
                    <Button variant="shadow">{'Submit'}</Button>
                </div>
            </Form>
        </div>
    )
}

export { LoginForm }
