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

const headers = {
    'Client-ID': process.env.CLIENT_ID,
    Authorization: '',
}

app.get('/api/streams', async (req, res) => {
    await getToken()

    const { data } = await axios.get(`${process.env.TWITCH_URL}/streams`, {
        params: { first: 15 },
        headers,
    })

    const ids = data.data.map((stream) => stream.user_id)
    const codes = [
        ...new Set(data.data.map((stream) => stream.tag_ids).flat(1)),
    ]

    const channels = await getUsersInfo(ids)
    const tags = await getTags(codes)

    const streams = data.data.map((stream) => {
        return {
            ...stream,
            channel: channels.find((user) => user.id === stream.user_id),
            tags: tags.filter((tag) => stream.tag_ids.includes(tag.id)),
        }
    })

    res.json(streams)
})

const getUsersInfo = async (ids) => {
    const { data } = await axios.get(`${process.env.TWITCH_URL}/users`, {
        params: {
            id: ids,
        },
        headers,
    })

    return data.data
}

const getTags = async (codes) => {
    let params = ''

    codes.forEach((code) => {
        params += `&tag_id=${code}`
    })

    params = params.substring(1)

    const { data } = await axios.get(
        `${process.env.TWITCH_URL}/tags/streams?${params}`,
        {
            headers,
        }
    )

    return data.data.map((tag) => ({
        id: tag.tag_id,
        name: tag.localization_names['en-us'],
        description: tag.localization_descriptions['en-us'],
    }))
}

app.get('/api/games', async (req, res) => {
    const { data } = await axios.get(`${process.env.TWITCH_URL}/games/top`, {
        params: {
            first: 8,
        },
        headers,
    })

    res.json(data.data)
})

const getToken = async () => {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials',
    })
    const { access_token } = response.data

    headers.Authorization = `Bearer ${access_token}`
}
