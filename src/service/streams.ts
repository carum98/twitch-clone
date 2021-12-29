import IStream from '../interfaces/IStream'
import API from './api'

export const getStreams = async (): Promise<IStream[]> => {
    const response = await API.get('/streams')
    const { data, pagination } = response.data as {
        data: IStream[]
        pagination: { total: number }
    }

    return data
}
