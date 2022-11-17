import api from '@/utils/axios'

export default {
  async getRandom() {
    const { data } = await api.get('/random')
    return data
  },
}
