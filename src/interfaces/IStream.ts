import IChannel from './IChannel'

interface IStream {
    id: string
    title: string
    channel_name: string
    viewers: number
    thoumbnail: string

    channel: IChannel
    tags: ITag[]
}

export default IStream
