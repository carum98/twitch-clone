import { ref } from 'vue'
import IChannel from '../interfaces/IChannel'
import IGames from '../interfaces/IGames'
import IStream from '../interfaces/IStream'
import { getGames } from '../service/games'
import { getStreams } from '../service/streams'

export const channels = ref<IChannel[]>([])
export const streams = ref<IStream[]>([])
export const games = ref<IGames[]>([])

export const fetchData = async () => {
    const response = await getStreams()

    streams.value = response
    channels.value = response.map((item: IStream) => item.channel)

    const response1 = await getGames()
    games.value = response1
}

export const fetchStream = async (channel: string): Promise<IStream> => {
    return streams.value.find(
        (item: IStream) => item.channel.name === channel
    ) as IStream
}
