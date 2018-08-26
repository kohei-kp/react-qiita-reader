import React, { Component } from 'react'
import './index.css'

class PostContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const renderedBody = this.props.selectedContent.hasOwnProperty('rendered_body')
      ? this.props.selectedContent.rendered_body
      : ''

    return (
      <div style={{ 'gridColumn': '2 / 3', border: '1px splid #ccc' }}>
        <h1>記事内容</h1>
        <div dangerouslySetInnerHTML={{__html: renderedBody }}></div>
      </div>
    )
  }
}

export default PostContent
