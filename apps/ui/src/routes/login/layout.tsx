import { Outlet } from 'react-router-dom'

function LoginLayout() {
    return (
        <main className="flex h-screen w-screen">
            <section className="w-3/4 p-9">
                Here will be background and information
            </section>
            <section className="flex w-1/4 min-w-96 flex-1 items-center justify-center bg-slate-600">
                <Outlet />
            </section>
        </main>
    )
}

export { LoginLayout }
