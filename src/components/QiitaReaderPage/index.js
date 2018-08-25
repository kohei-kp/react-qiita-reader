import React, { Component } from 'react'
import './index.css'

class QiitaReaderPage extends Component {
  render () {
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
              <li>Sample Sample Sample1</li>
              <li>Sample Sample Sample2</li>
              <li>Sample Sample Sample3</li>
              <li>Sample Sample Sample4</li>
              <li>Sample Sample Sample5</li>
              <li>Sample Sample Sample6</li>
            </ul>
          </div>
        </div>
        <div style={{ 'gridColumn': '2 / 3', border: '1px solid #ccc' }}>
          <h1>記事内容</h1>
          <div>
            Content Content Content
          </div>
        </div>
      </div>
    )
  }
}

export default QiitaReaderPage
