import { service_login, service_status_login } from './login'

const SERVICES = {
    login: service_login,
}

const SERVICES_STATUS = {
    login: service_status_login,
}

export { SERVICES, SERVICES_STATUS }
