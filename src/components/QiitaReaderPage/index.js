import React, { Component } from 'react'
import './index.css'
import api from '../../common/api'

class QiitaReaderPage extends Component {
  constructor () {
    super()

    this.state = {
      qiitaPostList: [{}],
      selectedPostId: ''
    }

    api.getQiitaPost()
      .then(res => {
        this.setState({ qiitaPostList: res })
      })
      .catch(err => {
        alert(err)
      })
  }

  getSelectedContent () {
    return this.state.qiitaPostList.find(post => post.id === this.state.selectedPostId) || {}
  }

  handleClickPost (id) {
    this.setState({ selectedPostId: id })
  }
  
  render () {
    const renderedBody = this.getSelectedContent().hasOwnProperty('rendered_body')
      ? this.getSelectedContent().rendered_body
      : ''
    
    return (
      <div className="grid">
        <div style={{ gridColumn: '1 / 2', border: '1px solid #ccc' }}>
          <div className="search-form">
            <label className="search-text"></label>
            <input type="text" id="search-text"></input>
            <button>検索</button>
          </div>
          <h1>記事一覧</h1>
          <div className="post-list">
            <ul>
              {
                this.state.qiitaPostList.map(post => {
                  return <li onClick={ this.handleClickPost.bind(this, post.id) }>{ post.title }</li>
                })
              }
            </ul>
          </div>
        </div>
        <div style={{ 'gridColumn': '2 / 3', border: '1px solid #ccc' }}>
          <h1>記事内容</h1>
          <div dangerouslySetInnerHTML={{__html: renderedBody }}></div>
        </div>
      </div>
    )
  }
}

export default QiitaReaderPage
