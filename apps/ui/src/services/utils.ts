import { AsyncThunk } from '@reduxjs/toolkit'

type ServiceObject = {
    [key: string]: AsyncThunk<any, any, any>
}

type ThunkKeys = 'pending' | 'fulfilled' | 'rejected' | 'settled'

type ServiceStatus<T> = {
    [key in ThunkKeys]: Record<keyof T, AsyncThunk<any, any, any>[key]> & {
        all: AsyncThunk<any, any, any>[key][]
    }
}

function getServiceStatus<T extends ServiceObject>(
    services: T,
): ServiceStatus<T> {
    const keys = ['pending', 'fulfilled', 'rejected', 'settled'] as const

    return keys.reduce((acc, key) => {
        // @ts-expect-error -- Typescript is not smart enough to infer the type of the object when using Object.fromEntries
        acc[key] = {
            ...acc[key],
            ...Object.fromEntries(
                Object.entries(services).map(([serviceName, service]) => [
                    serviceName,
                    service[key],
                ]),
            ),
            all: Object.values(services).map((service) => service[key]),
        }

        return acc
    }, {} as ServiceStatus<T>)
}

export { getServiceStatus }
