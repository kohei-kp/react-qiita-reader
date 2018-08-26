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

  setSelectedPostId (id) {
    this.setState({ selectedPostId: id })
  }
  
  render () {
    const renderedBody = this.getSelectedContent().hasOwnProperty('rendered_body')
      ? this.getSelectedContent().rendered_body
      : ''
    
    return (
      <div className="grid">
        <PostList
          qiitaPostList={ this.state.qiitaPostList }
          setSelectedPostId={ this.setSelectedPostId.bind(this) }
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
