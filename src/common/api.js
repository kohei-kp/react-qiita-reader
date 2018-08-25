import axios from 'axios'

const api = axios.create({
  baseURL: 'https://qiita.com/api/v2',
  timeout: 300 * 1000
})

const handleSuccess = res => {
  return Promise.resolve(res.data)
}

const handleError = err => {
  return Promise.reject(err)
}

export default {
  /**
   * Qiitaの投稿一覧を取得
   *
   * @param {number} page
   * @param {number} perPage
   * @return {Promise}
   */
  getQiitaPost (page = 1, perPage = 20) {
    return api.get('items', {
      params: {
        page,
        per_page: perPage
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  },

  /**
   * Qiitaのタグ一覧を取得
   *
   * @param {number} page
   * @param {number} perPage
   * @param {number} sort
   */
  getQiitaTags (page = 1, perPage = 1, sort = 'name') {
    return api.get('tags', {
      page,
      per_page: perPage,
      sort
    })
  },

  /**
   * Qiitaの投稿一覧をタグで絞り込んで取得
   *
   * @param {number} page
   * @param {number} perPage
   * @param {number} tagId
   * @return {Promise}
   */
  getQiitaPostWithTag (page = 1, perPage = 1, tagId) {
    return api.get(`${tagId}/items`, {
      params: {
        page,
        per_page: perPage
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }
}
