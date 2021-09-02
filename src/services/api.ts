import axios from 'axios'

class Services {

  async add(router: string, data: any) {
    const upload = await axios.post(router, data)
    return await upload.data
  }

  async list(router: string) {
    const figures = await  axios.get(router)
    return await figures.data
  }

  async delete(router: string, id: string) {
    const del = await axios.delete(`${router}/${id}`)
    return await del.status
  }

}

export default new Services()