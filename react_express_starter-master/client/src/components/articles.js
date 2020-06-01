import React, { Component } from 'react';

class Articles extends Component {
    constructor() {
      super();
      this.state = {
        articles: []
      };
    }
    
    
    componentDidMount() {
      fetch('/articles/add')
        .then(res => res.json())
        .then(articles => this.setState({articles}, () => console.log('Customers fetched...', articles)));
    }
  
    render() {
      return (
        <div>
          <h2>
              {this.state.articles.map(article => 
            <p>{article.title}</p>)}</h2>
        </div>
      );
    }
  }
  
  export default Articles;
  