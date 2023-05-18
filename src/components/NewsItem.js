import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3" >
          <div style={{display: 'flex',  justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span class="badge rounded-pill bg-danger" >
            {source ? source : 'Uknown'}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title newsTitle ">{title}...</h5>

            <p className="card-text newsDesc ">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
