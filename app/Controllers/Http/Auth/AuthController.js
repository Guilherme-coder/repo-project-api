'use strict'

const User = use('App/Models/User')

class AuthController {
    async register({ request, auth }){
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)

        const possibleUser = request.only(['email', 'password'])
        const token = await auth.attempt(possibleUser.email, possibleUser.password)
        let dataToken = [token]

        return dataToken
    }

    async login({ request, auth }){
        const possibleUser = request.only(['email', 'password'])
        const token = await auth.attempt(possibleUser.email, possibleUser.password)
        let data = [token]
        return data
    }

    async loadSession({ request, auth }){
        return {
            id: auth.user.id,
            username: auth.user.username,
            email: auth.user.email,
        }
    }
}

module.exports = AuthController
