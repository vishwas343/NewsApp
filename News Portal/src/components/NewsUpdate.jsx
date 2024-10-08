import React, { Component } from 'react';

export default class NewsUpdate extends Component {
  render() {
    let { title, description, imageURL, newsURL, date } = this.props;

    return (
      <div>
        <div className="my-3">
          {/* Card container */}
          <div className="card mx-auto" style={{ maxWidth: '100%', height: '30rem' }}>
            {/* Image section */}
            <img src={imageURL} className="card-img-top img-fluid" alt="News" style={{ objectFit: 'cover', maxHeight: '200px' }}/>

            {/* Card body */}
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{description}...</p> */}
              </div>
              <a rel="noreferrer" href={newsURL} className="btn btn-danger mt-3 fw-bold" target="_blank">Continue Reading </a>
            </div>

            {/* Card footer */}
            <div className="card-footer text-success font-monospace">
              Updated on {date}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

