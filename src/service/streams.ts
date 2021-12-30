import IChannel from '../interfaces/IChannel'
import IStream from '../interfaces/IStream'
import API from './api'

export const getStreams = async (): Promise<IStream[]> => {
    const response = await API.get('/streams')

    return response.data.map(
        (item: any) =>
            ({
                id: item.id,
                title: item.title,
                game: item.game_name,
                channel_name: item.user_name,
                viewers: item.viewer_count,
                thoumbnail: item.thumbnail_url
                    .replace('{width}', '320')
                    .replace('{height}', '180'),
                channel: {
                    id: item.channel.id,
                    name: item.channel.display_name,
                    description: item.channel.description,
                    viewers: item.viewer_count,
                    thumbnail: item.channel.profile_image_url,
                    game: item.game_name,
                } as IChannel,
                tags: item.tags as ITag[],
            } as IStream)
    )
}
