const axios = require('axios')
// this.$axios.baseURL = "http://127.0.0.1:3333"

describe('testes de sessao de usuario', () => {
    it('teste de autenticacao', async () => {
        const email = 'teste@teste.com'
        const password = 'senha123'
        var results = await axios.post('http://localhost:3333/login', { email: email, password: password })
                                .then(res => { return res })

        expect(results.status).toBe(200)
        expect(results.data[0].token).not.toBeNull()
    }),
    it('teste de carregamento de sessao', async () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjM1LCJpYXQiOjE2MzUxMDE4MTd9.pnkTnixeJUJfbXnpiFfPcOl5Xv0oeZyesV0eHd885rE'

        const params = {}
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjM1LCJpYXQiOjE2MzUxMDE4MTd9.pnkTnixeJUJfbXnpiFfPcOl5Xv0oeZyesV0eHd885rE'}
        const url = 'http://localhost:3333/load_session'

        var results = await axios.get(url, params, headers)
                                .then(res => { return res })

        expect(results.status).toBe(200)
        expect(results.data.username).not.toBeNull()
        expect(results.data.email).not.toBeNull()
    })
})