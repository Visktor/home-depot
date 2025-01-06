import { createBrowserRouter } from 'react-router-dom'
import { LoginLayout } from '../../routes/login/layout'
import { LoginForm } from '../../routes/login/form/form'

// #NOTE This throws some exotic error if it's type is not annotated explicitly.
const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <LoginForm />,
            },
        ],
    },
])

export { router as ApplicationRouter }
