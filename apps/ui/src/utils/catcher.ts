function withCatcher<T, E extends new (message?: string) => Error>(
    promise: Promise<T>,
    errorsToCatch?: E[],
): Promise<[undefined, T] | [InstanceType<E>]> {
    return promise
        .then(
            data => [undefined, data] as [undefined, T]
        )
        .catch(err => {
            if (errorsToCatch === undefined) {
                return [err]
            }
            if (errorsToCatch.some(e => err instanceof e)) {
                return [err]
            }
            throw err
        })
}

export { withCatcher }
