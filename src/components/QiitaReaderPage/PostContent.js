import React, { Component } from 'react'
import './index.css'

class PostContent extends Component {
  constructor (props) {
    super(props)
  }

  createPostContent () {
    if (!Object.keys(this.props.selectedContent).length) {
      return 'Not Selected.'
    }

    const selectedContent = this.props.selectedContent

    return (
      <div>
        <div className="post-info">
          <div><img src={ selectedContent.user.profile_image_url } width="32" height="32"></img></div>
          <div>{ selectedContent.user.id }</div>
          <div>{ selectedContent.created_at }</div>
        </div>
        <h1>{ selectedContent.title }</h1>
        <div className="tags">
        {
          selectedContent.tags.map(tag => {
            return (
              <span className="tag">{ tag.name }</span>
            )
          })
        }
        </div>
        <div dangerouslySetInnerHTML={{ __html: selectedContent.rendered_body }}></div>
      </div>
    )
  }

  render () {
    return (
      <div style={{ 'gridColumn': '2 / 3', border: '1px splid #ccc' }}>
        { this.createPostContent() }
      </div>
    )
  }
}

export default PostContent
