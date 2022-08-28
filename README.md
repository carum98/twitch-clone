# <img src="https://github.com/carum98/twitch-clone/blob/main/public/favicon.svg" width="30">  <img src="https://github.com/carum98/twitch-clone/blob/main/src/assets/logo.png" width="30">

**Twitch clone** build with Vue 3 + Typescript + Vite

## SetUp
This project use [Twitch API](https://dev.twitch.tv/)

Create ``.env``:

```
TWITCH_URL=https://api.twitch.tv/helix

CLIENT_ID=[CLIENT_ID]
CLIENT_SECRET=[CLIENT_SECRET]
```

With Docker
```bash
docker run -d --env TWITCH_URL=[TWITCH_URL] --env CLIENT_ID=[CLIENT_ID] --env CLIENT_SECRET=[CLIENT_SECRET] --env PORT=8080 -p 8080:8080 -p 3000:3000 ghcr.io/carum98/twitch-clone:[tag]
```

## Video
https://user-images.githubusercontent.com/40967143/147803256-635b22e8-1f6b-494e-8062-60a626520193.mp4

## Screenshots
![](https://github.com/carum98/twitch-clone/blob/main/screenshot/dashboard.png)

![](https://github.com/carum98/twitch-clone/blob/main/screenshot/dashboard_2.png)

![](https://github.com/carum98/twitch-clone/blob/main/screenshot/dashboard_3.png)

![](https://github.com/carum98/twitch-clone/blob/main/screenshot/stream.png)
