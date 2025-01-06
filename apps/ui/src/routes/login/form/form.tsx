import { Button, Input } from '@nextui-org/react'
import { Form } from 'react-hook-form'
import { useLoginForm } from './form.container'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '#/components/IconButton'

function LoginForm() {
    const { isLoading, form, onSubmit, isPasswordVisible } = useLoginForm()

    return (
        <div className="flex w-full flex-col gap-4 p-4">
            <Form {...form} onSubmit={({ data }) => onSubmit(data)}>
                <fieldset className="flex flex-col gap-2">
                    <legend className="sr-only">Login Form</legend>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        {...form.register('email')}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        endContent={
                            <div className="flex h-full items-center">
                                <IconButton icon={faEye} />
                            </div>
                        }
                        {...form.register('password')}
                    />
                </fieldset>
                <div className="mt-2 flex justify-end">
                    <Button isLoading={isLoading} variant="shadow">
                        {'Submit'}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export { LoginForm }
