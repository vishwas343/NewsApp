import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';
import PropTypes from 'prop-types';
import LoadIcon from './LoadIcon';

export default class News extends Component {
  
  static defaultProps = {
    category: 'general',
  };
  
  static propTypes = {
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.newsfetch(); // Fetch the articles on initial load
  }

  async newsfetch() {
    this.props.setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=79bc2f8d89e44877ad2b539fd2246e5b&page=1&pageSize=12`;
    let data = await fetch(url);
    this.props.setProgress(23);
    let parsedData = await data.json();
    this.props.setProgress(66);
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
    });
    this.props.setProgress(100);
  }

  previousBtn = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=79bc2f8d89e44877ad2b539fd2246e5b&page=${this.state.page - 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo(0, 0); // Scroll to top of the page after pagination
  };

  nextBtn = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=79bc2f8d89e44877ad2b539fd2246e5b&page=${this.state.page + 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo(0, 0); // Scroll to top of page after pagination
  };

  render() {
    const totalPages = Math.ceil(this.state.totalResults / 12);
    return (
      <>
        <div className="container my-3 bg-body-tertiary">
          <h2 className="text-center fw-bold">{this.props.category !== 'general'? this.props.category.toUpperCase(): 'TOP'}{' '}HEADLINES</h2>

          {/* News Cards Grid */}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={element.url}>
                  <NewsUpdate title={element.title.slice(0, 100)} date={element.publishedAt.slice(0, 10)} newsURL={element.url} description={ element.description ? element.description.slice(0, 45) : ''} imageURL={element.urlToImage}/>
                </div>
              );
            })}
          </div>

          {/* Loading Icon */}
          {this.state.loading && <LoadIcon />}

          {/* Pagination Controls */}
          <div className="d-flex justify-content-between align-items-center my-3">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark fw-bold" onClick={this.previousBtn}>PREVIOUS</button>
            <span className="mx-3 fw-bold"> {this.state.page} / {totalPages}</span>
            <button disabled={this.state.page >= totalPages} type="button" className="btn btn-dark fw-bold" onClick={this.nextBtn}> NEXT</button>
          </div>

          {/* No Results Message */}
          {this.state.totalResults < 1 && (<div className="text-center">WILL BE ADDED SOON...</div>)}
        </div>
      </>
    );
  }
}
