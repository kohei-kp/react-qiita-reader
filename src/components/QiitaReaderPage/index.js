import React, { Component } from 'react'
import './index.css'
import api from '../../common/api'
import PostList from './PostList'
import PostContent from './PostContent'

class QiitaReaderPage extends Component {
  constructor () {
    super()

    this.state = {
      qiitaPostList: [{}],
      selectedPostId: ''
    }

    this.refreshPostList()
  }

  getSelectedContent () {
    return this.state.qiitaPostList.find(post => post.id === this.state.selectedPostId) || {}
  }

  setSelectedPostId (id) {
    this.setState({ selectedPostId: id })
  }

  refreshPostList () {
    api.getQiitaPost()
      .then(res => {
        this.setState({ qiitaPostList: res })
      })
      .catch(err => {
        alert(err)
      })
  }

  render () {
    return (
      <div className="grid">
        <PostList
          qiitaPostList={ this.state.qiitaPostList }
          setSelectedPostId={ this.setSelectedPostId.bind(this) }
          refreshPostList={ this.refreshPostList.bind(this) }
        >
        </PostList>
        <PostContent
          selectedContent={ this.getSelectedContent() }
        >
        </PostContent>
      </div>
    )
  }
}

export default QiitaReaderPage
