class ServicesLogin {
    static async login() {
        await new Promise((resolve) => setTimeout(resolve, 5000))
        return { data: 'login' }
    }
}

export { ServicesLogin }
