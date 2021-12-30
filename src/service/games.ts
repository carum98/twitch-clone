import IGames from '../interfaces/IGames'
import API from './api'

export const getGames = async (): Promise<IGames[]> => {
    const response = await API.get('/games')

    console.log(response)

    return response.data.map(
        (item: any) =>
            ({
                id: item.id,
                name: item.name,
                box_art_url: item.box_art_url
                    .replace('{width}', '100')
                    .replace('{height}', '150'),
            } as IGames)
    )
}
