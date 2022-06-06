import { api } from './config'

export default {
    login: (user) => {
        return api.post('/auth/login',{
            email: user.email,
            password: user.password
        });
    }
}