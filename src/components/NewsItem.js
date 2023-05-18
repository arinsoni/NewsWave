import React, { useState } from 'react'

const NewsItem = (props) => {

    let { title, description, newsUrl, imageUrl, author, date, source } = props;

    return (
      <div>
        <div className="card my-3" style={{backgroundColor: props.mode === 'light' ? 'white': '#1E2B33', color: props.mode === 'light' ? 'black': 'white'}}>
          <div style={{display: 'flex',  justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger" >
            {source ? source : 'Uknown'}
          </span>
          </div>
          <img src={!imageUrl ? 'https://www.guwahatiplus.com/public/web/images/default-news.png': imageUrl} className="card-img-top" alt="No Image" />
          <div className="card-body">
            <h5 className="card-title newsTitle ">{title}...</h5>

            <p className="card-text newsDesc ">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" style={{backgroundColor: props.mode === 'light' ? 'white': '#1E2B33', color: props.mode === 'light' ? 'black': 'white', borderColor: props.mode === 'light' ? 'blue' : '#F87D51'}} >Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
