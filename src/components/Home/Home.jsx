import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {fetchArticles} from '../../actions/articlesAction.jsx';

@connect((store) => {
    return {
        articles: store.articles
    };
})
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentWillMount(){
         this.props.dispatch(fetchArticles());
    }

   render() {
       const articles = this.props.articles;
      const article =  articles.articles.map(function(article){
          return (
              <div key={article._id}>
                {article.description}
              </div>
          );
      });
      return (
         <div>
            <h1>Home...</h1>
            {article}
         </div>
      )
   }
}

export default Home;