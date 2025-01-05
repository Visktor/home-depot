import { RouterProvider } from 'react-router-dom'
import { ApplicationRouter } from './lib/router/router'
import { NextUIProvider } from '@nextui-org/react'

function App() {
    return (
        <NextUIProvider>
            <RouterProvider router={ApplicationRouter} />
        </NextUIProvider>
    )
}

export default App
