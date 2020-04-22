import React from 'react';
import {connect} from 'react-redux';
import agent from '../agent';
import Search from './Search';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) =>
    dispatch({type: 'SEARCH_POSTS_BY_QUERY', payload}),
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.props.onLoad(agent.Post.search(query, 1, 20));
  }

  render() {
    return (
      <div>
        Procure:
        <Search callback={this.handleSearch}/>
          Posts:
        <ul>
          {
            this.props.posts.map(
                (item, i) =>
                  (
                    <li key={i}>
                      {item.title}
                    </li>
                  ),
            )
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
