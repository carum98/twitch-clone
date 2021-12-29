const express = require('express')
const axios = require('axios')
var cors = require('cors')

require('dotenv').config()

const app = express()
const port = 3000

app.use(
    cors({
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/api/streams', async (req, res) => {
    const token = await getToken()

    const { data } = await axios.get(
        `${process.env.TWITCH_URL}/streams?first=100`,
        {
            headers: {
                'Client-ID': process.env.CLIENT_ID,
                Authorization: token,
            },
        }
    )

    res.json(data)
})

const getToken = async () => {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials',
    })
    const { access_token } = response.data

    return `Bearer ${access_token}`
}
