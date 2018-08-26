import React, { Component } from 'react'
import './index.css'

class PostList extends Component {
  constructor (props) {
    console.log(props)
    super(props)

    this.state = {
      selectedPostId: ''
    }
  }

  handleClickPost (id) {
    this.props.setSelectedPostId(id)
    this.setState({ selectedPostId: id })
  }

  handleClickRefresh () {
    this.props.refreshPostList()
  }

  render () {
    return (
      <div style={{ gridColumn: '1 / 2', border: '1px solid #ccc' }}>
        <div className="search-form">
          <label className="search-text"></label>
          <input type="text" id="search-text"></input>
          <button>検索</button>
          </div>
          <h1>記事一覧</h1>
          <button onClick={ this.handleClickRefresh.bind(this) }>更新</button>
          <div className="post-list">
            <ul>
              {
                this.props.qiitaPostList.map(post => {
                  return (
                    <li
                      className={ `${this.state.selectedPostId === post.id ? 'my-highlight' : ''}`}
                      onClick={ this.handleClickPost.bind(this, post.id) }
                    >
                      { post.title }
                    </li>
                  )
                })
              }
            </ul>
          </div>
      </div>
    )
  }
}

export default PostList
