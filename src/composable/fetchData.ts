import { ref } from 'vue'
import IChannel from '../interfaces/IChannel'
import IStream from '../interfaces/IStream'
import { getStreams } from '../service/streams'

export const channels = ref<IChannel[]>([])
export const streams = ref<IStream[]>([])

export const fetchData = async () => {
    const response = await getStreams()

    streams.value = response
    channels.value = response.map((item: IStream) => item.channel)

    console.log(channels.value)
}
